<template>
  <li class="table-item">
    <a href="#" class="table-item-wrapper w-inline-block">
      <div class="w-layout-grid grid-11">
        <div class="div-block-14">
          <div class="text-block-4 text-truncate">{{hash | summarize}}…</div>
          <img src="@/assets/images/icon-arrow-right.svg" width="9" alt="" class="image">
        </div>
        <div class="text-block-16">{{timestamp | timesAgo}} ago</div>
        <div class="text-block-16">{{transaction.sighash | summarize(24)}}...</div>
        <div class="text-block-16">{{transaction.payload}}</div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'transaction-item',
  props: ['transaction', 'hash', 'timestamp']
}
</script>

<style>

</style>
