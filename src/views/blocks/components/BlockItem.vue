<template>
  <li class="table-item">
    <a href="#" class="table-item-wrapper w-inline-block">
      <div class="w-layout-grid grid-6">
        <div class="div-block-2">
          <div class="text-block-4">{{block.blockNum}}</div><img src="@/assets/images/icon-arrow-right.svg" width="9" alt="" class="image"></div>
        <div class="text-block-11">{{block.timestamp | datetimeFormatter}}</div>
        <div>{{transactions}}</div>
        <div id="w-node-3478025075f4-86e241c5" class="div-block-2">
          <div class="text-block-12">{{block.signerPubKey | summarize(34)}}...</div><img src="@/assets/images/icon-arrow-right.svg" width="9" alt="" class="image"></div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'block-item',
  props: ['block'],
  computed: {
    transactions () {
      return Object.keys(this.block.transactions).length
    }
  }
}
</script>

<style>

</style>
