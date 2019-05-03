<template>
  <li class="transaction-item">
    <div class="w-layout-grid grid-3">
      <div>
        <router-link
          :to="{name: 'transaction-detail', params: {transaction_id: hash}}"
          class="hash-link w-inline-block"
        >
          <div class="text-block-3">Hash:</div>
          <div class="hash-number text-truncate">{{hash | summarize}}…</div><img src="@/assets/images/icon-arrow-right.svg" width="9" alt="">
        </router-link>
        <div class="hash-amount-block">
          <div>Amount:&nbsp;</div>
          <div class="hash-amount">{{transaction.payload}}</div>
        </div>
      </div>
      <div class="hash-timestamp">{{blockTimestamp | timesAgo}} ago</div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'transaction-item',
  props: ['transaction', 'hash', 'blockTimestamp']
}
</script>

<style>

</style>
