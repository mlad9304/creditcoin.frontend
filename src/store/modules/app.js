import appAPI from '@/api/app'

const state = {
  totalSupply: 2000000000,
  blockchainInfo: {},
  blockHistory: {},
  lastBlock: {}
}

const getters = {
  totalSupply: state => state.totalSupply,
  blockchainInfo: state => state.blockchainInfo,
  blockHistory: state => state.blockHistory,
  lastBlock: state => state.lastBlock
}

const actions = {
  async fetchBlockchainInfo ({ commit }) {
    const response = await appAPI.fetchBlockchainInfo()
    commit('setBlockchainInfo', response.data)
  },
  async fetchBlockHistory ({ commit }) {
    const response = await appAPI.fetchBlockHistory()
    commit('setBlockHistory', response.data.data)
  },
  async fetchLastBlock ({ commit }) {
    const response = await appAPI.fetchBlockHistory(1)
    commit('setLastBlock', response.data.data)
  }
}

const mutations = {
  setBlockchainInfo: (state, blockchainInfo) => (state.blockchainInfo = blockchainInfo),
  setBlockHistory: (state, blockHistory) => (state.blockHistory = blockHistory),
  setLastBlock: (state, block) => (state.lastBlock = block)
}

export default {
  state,
  getters,
  actions,
  mutations
}
