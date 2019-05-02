import appAPI from '@/api/app'

const state = {
  blockchainInfo: {},
  blockHistory: {}
}

const getters = {
  blockchainInfo: state => state.blockchainInfo,
  blockHistory: state => state.blockHistory
}

const actions = {
  async fetchBlockchainInfo ({ commit }) {
    const response = await appAPI.fetchBlockchainInfo()
    commit('setBlockchainInfo', response.data)
  },
  async fetchBlockHistory ({ commit }) {
    const response = await appAPI.fetchBlockHistory()
    commit('setBlockHistory', response.data.data)
  }
}

const mutations = {
  setBlockchainInfo: (state, blockchainInfo) => (state.blockchainInfo = blockchainInfo),
  setBlockHistory: (state, blockHistory) => (state.blockHistory = blockHistory)
}

export default {
  state,
  getters,
  actions,
  mutations
}
