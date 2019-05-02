<template>
  <div class="page-wrapper">
    <div class="container w-container">
      <div class="w-layout-grid grid">
        <div>
          <Info :totalSupply="totalSupply" :blockchainInfo="blockchainInfo" />
          <Transactions v-for="(block, key) in lastBlock" :key="key" :block="block"/>
        </div>
        <div>
          <History :blockHistory="blockHistory" />
          <About />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Info from './components/Info'
import Transactions from './components/Transactions'
import History from './components/History'
import About from './components/About'

export default {
  name: 'home',
  methods: {
    ...mapActions([
      'fetchBlockchainInfo',
      'fetchBlockHistory',
      'fetchLastBlock'
    ])
  },
  computed: mapGetters([
    'totalSupply',
    'blockchainInfo',
    'blockHistory',
    'lastBlock'
  ]),
  created () {
    this.fetchBlockchainInfo()
    this.fetchBlockHistory()
    this.fetchLastBlock()
  },
  components: {
    Info,
    Transactions,
    History,
    About
  }
}
</script>

<style>

</style>
