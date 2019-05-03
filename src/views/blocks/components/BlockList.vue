<template>
  <ul class="w-list-unstyled">
    <BlockItem
      v-for="(block, block_id) in blocks"
      :key="block.block_id"
      :block="block"
      :block_id="block_id"
    />
  </ul>
</template>

<script>
import BlockItem from './BlockItem'

export default {
  name: 'block-list',
  props: ['blocks'],
  components: {
    BlockItem
  }
}
</script>

<style>

</style>
