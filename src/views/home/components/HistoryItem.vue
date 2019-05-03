<template>
  <li class="block-history-item">
    <div class="w-layout-grid grid-4">
      <div class="block-history-block">
        <div class="block-id">BLOCK {{block.blockNum}}</div>
        <div>{{block.timestamp | timesAgo}} ago</div>
      </div>
      <div class="block-history-details">
        <a href="#" class="hash-link w-inline-block">
          <div class="text-block-3">Miner:</div>
          <div class="hash-number text-truncate">{{signerPubKey}}…</div><img src="@/assets/images/icon-arrow-right.svg" width="9" alt=""></a>
        <div class="hash-amount-block">
          <div>Transactions:&nbsp;</div>
          <div class="hash-amount">{{transactions}}</div>
        </div>
        <div class="spacpe-h-5px"></div>
        <div class="hash-amount-block">
          <div>Size:&nbsp;</div>
          <div class="hash-amount">{{block.size}}</div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'history-item',
  props: ['block'],
  computed: {
    signerPubKey () {
      return this.block.signerPubKey.substr(0, 15)
    },
    transactions () {
      return Object.keys(this.block.transactions).length
    }
  }
}
</script>

<style>

</style>
