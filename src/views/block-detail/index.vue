<template>
  <div class="page-wrapper">
    <div class="container w-container">
      <BlockInfo :block="blockDetail" :block_id="$route.params.block_id" />
      <Transactions :transactions="blockDetail.transactions" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import store from '@/store'
import BlockInfo from './components/BlockInfo'
import Transactions from './components/Transactions'

export default {
  name: 'block-detail',
  methods: {
    ...mapActions(['fetchBlockDetail'])
  },
  computed: {
    ...mapGetters(['blockDetail'])
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch('fetchBlockDetail', to.params.block_id)
    next()
  },
  components: {
    BlockInfo,
    Transactions
  }
}
</script>

<style>

</style>
