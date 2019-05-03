<template>
  <div>
    <h2>Transaction</h2>
    <div class="block">
      <ul class="list w-list-unstyled">
        <TransactionItem
          v-for="(transaction, hash) in block.transactions"
          :key="hash"
          :transaction="transaction"
          :hash="hash"
          :blockTimestamp="block.timestamp"
        />
      </ul>
      <router-link to="/transactions" class="button w-button">SEE MORE TRANSACTIONS</router-link>
    </div>
  </div>
</template>

<script>
import TransactionItem from './TransactionItem'

export default {
  name: 'transactions',
  props: ['block'],
  components: {
    TransactionItem
  }
}
</script>

<style>

</style>
