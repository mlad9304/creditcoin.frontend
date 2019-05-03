import appAPI from '@/api/app'

const state = {
  totalSupply: 2000000000,
  blockchainInfo: {},
  blockHistory: {},
  lastBlock: {},
  blocksByDate: {}
}

const getters = {
  totalSupply: state => state.totalSupply,
  blockchainInfo: state => state.blockchainInfo,
  blockHistory: state => state.blockHistory,
  lastBlock: state => state.lastBlock,
  blocksByDate: state => state.blocksByDate
}

const actions = {
  async fetchBlockchainInfo ({ commit }) {
    const response = await appAPI.fetchBlockchainInfo()
    commit('setBlockchainInfo', response.data)
  },
  async fetchBlockHistory ({ commit }) {
    const response = await appAPI.fetchBlocks()
    commit('setBlockHistory', response.data.data)
  },
  async fetchLastBlock ({ commit }) {
    const response = await appAPI.fetchBlocks(1)
    commit('setLastBlock', response.data.data)
  },
  async fetchBlocksByDate ({ commit }) {
    const response = await appAPI.fetchBlocks(8)
    commit('setBlocksByDate', response.data.data)
  }
}

const mutations = {
  setBlockchainInfo: (state, blockchainInfo) => (state.blockchainInfo = blockchainInfo),
  setBlockHistory: (state, blocks) => (state.blockHistory = blocks),
  setLastBlock: (state, block) => (state.lastBlock = block),
  setBlocksByDate: (state, blocks) => (state.blocksByDate = blocks)
}

export default {
  state,
  getters,
  actions,
  mutations
}
