<template>
  <div>
    <h2>Transactions</h2>
    <TransactionItem
      v-for="(transaction, hash) in transactions"
      :key="hash"
      :transaction="transaction"
      :hash="hash"
    />
  </div>
</template>

<script>
import TransactionItem from './TransactionItem'

export default {
  name: 'transactions',
  props: ['transactions'],
  components: {
    TransactionItem
  }
}
</script>

<style>

</style>
