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
      </ul><a href="#" class="button w-button">SEE MORE TRANSACTIONS</a>
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
