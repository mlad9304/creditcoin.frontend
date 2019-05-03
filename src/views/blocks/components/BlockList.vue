<template>
  <ul class="w-list-unstyled">
    <BlockItem v-for="block in blocks" :key="block.blockNum" :block="block" />
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
