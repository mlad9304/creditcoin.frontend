import appAPI from '@/api/app'

const state = {
  blockchainInfo: {}
}

const getters = {
  blockchainInfo: state => state.blockchainInfo
}

const actions = {
  async fetchBlockchainInfo ({ commit }) {
    const response = await appAPI.fetchBlockchainInfo()

    commit('setBlockchainInfo', response.data)
  }
}

const mutations = {
  setBlockchainInfo: (state, blockchainInfo) => (state.blockchainInfo = blockchainInfo)
}

export default {
  state,
  getters,
  actions,
  mutations
}
