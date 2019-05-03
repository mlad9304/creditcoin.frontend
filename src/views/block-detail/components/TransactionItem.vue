<template>
  <div class="block small-padding">
    <div class="address-left">
      <div class="text-block-5 text-truncate">0x{{hash | summarize(64)}}...</div>
      <a href="#" class="link-block w-inline-block"><img src="@/assets/images/copy_icon.svg" width="17" alt=""></a></div>
    <div class="transaction-wrapper">
      <div class="transaction-left">
        <div class="text-truncate">0x6f90954f8bb2d15e73bbd5c50d6dda4ae61ce259</div>
        <div class="div-block-4"><img src="@/assets/images/Triangle2x.svg" width="25" alt=""></div>
      </div>
      <div class="div-block-3"><img src="@/assets/images/arrow2x.svg" width="90" alt=""></div>
      <div class="transaction-right">
        <div class="text-truncate">0x6f90954f8bb2d15e73bbd5c50d6dda4ae61ce259</div>
        <div class="triangle-right"><img src="@/assets/images/Triangle2x.svg" width="25" alt=""></div>
      </div>
    </div>
    <div class="w-layout-grid grid-9">
      <div id="w-node-938d61d547f2-c60a0bb4" class="hash-amount-block">
        <div>Amount:&nbsp;</div>
        <div class="hash-amount">10 CREC</div>
      </div>
      <div id="w-node-1c6126d7169c-c60a0bb4" class="hash-amount-block">
        <div>Fee:&nbsp;</div>
        <div class="hash-amount">0.1 CREC</div>
      </div>
      <div id="w-node-f87fbfa5e868-c60a0bb4" class="hash-amount-block">
        <div>Received:&nbsp;</div>
        <div class="hash-amount">0.9 CREC</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transaction-item',
  props: ['transaction', 'hash']
}
</script>

<style>

</style>
