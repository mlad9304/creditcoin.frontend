<template>
  <ul class="w-list-unstyled">
    <TransactionItem
      v-for="(transaction, hash) in transactions"
      :key="hash"
      :transaction="transaction"
      :hash="hash"
      :timestamp="timestamp"
    />
  </ul>
</template>

<script>
import TransactionItem from './TransactionItem'

export default {
  name: 'transaction-history',
  props: ['transactions', 'timestamp'],
  components: {
    TransactionItem
  }
}
</script>

<style>

</style>
