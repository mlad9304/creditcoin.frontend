<template>
  <div class="page-wrapper">
    <div class="container w-container">
      <div class="w-layout-grid grid">
        <div>
          <Info :blockchainInfo="blockchainInfo"/>
          <Transaction />
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
import Transaction from './components/Transaction'
import History from './components/History'
import About from './components/About'

export default {
  name: 'home',
  methods: {
    ...mapActions(['fetchBlockchainInfo', 'fetchBlockHistory'])
  },
  computed: mapGetters(['blockchainInfo', 'blockHistory']),
  created () {
    this.fetchBlockchainInfo()
    this.fetchBlockHistory()
  },
  components: {
    Info,
    Transaction,
    History,
    About
  }
}
</script>

<style>

</style>
