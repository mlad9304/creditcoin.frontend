<template>
  <div class="page-wrapper">
    <div class="section-transaction-history">
      <div class="container w-container">
        <div class="page-header">
          <div>
            <h1>Transaction History</h1>
          </div>
          <div class="calendar-widget"><img src="@/assets/images/calendar-placeholder2x.png" width="142" alt=""></div>
        </div>
      </div>
    </div>
    <div class="container w-container">
      <div class="blocks-by-date-wrapper">
        <div class="blocks-by-date">
          <div class="table-header">
            <div class="w-layout-grid grid-10">
              <div id="w-node-5afb7b76a72b-fa5f8a2b">HASH</div>
              <div id="w-node-d5f1da98ac5d-fa5f8a2b">Age</div>
              <div id="w-node-f47bce16292e-fa5f8a2b">FROM</div>
              <div>Payload</div>
            </div>
          </div>
          <TransactionHistory
            v-for="block in lastBlock"
            :key="block.blockNum"
            :transactions="block.transactions"
            :timestamp="block.timestamp"
          />
        </div>
        <div class="ghost-block-1"></div>
        <div class="ghost-block-2"></div>
        <div class="ghost-block-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TransactionHistory from './components/TransactionHistory'

export default {
  name: 'transactions',
  methods: {
    ...mapActions(['fetchLastBlock'])
  },
  computed: {
    ...mapGetters(['lastBlock'])
  },
  created () {
    this.fetchLastBlock()
  },
  components: {
    TransactionHistory
  }
}
</script>

<style>

</style>
