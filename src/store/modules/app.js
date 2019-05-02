import axios from 'axios'

const state = {
  blockchainInfo: {}
}

const getters = {
  blockchainInfo: state => state.blockchainInfo
}

const actions = {
  async fetchBlockchainInfo ({ commit }) {
    const response = await axios.get(
      'https://creditcoinapi-test.azurewebsites.net/api/blockchain'
    )

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
