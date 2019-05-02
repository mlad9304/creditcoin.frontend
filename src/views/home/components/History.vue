<template>
  <div>
    <h2>Block History</h2>
    <div class="block">
      <ul class="block-history-list w-list-unstyled">
        <HistoryItem v-for="block in blockHistory" :block="block" :key="block.blockNum"/>
      </ul><a href="#" class="button w-button">SEE BLOCKS BY DATE</a>
    </div>
  </div>
</template>

<script>
import HistoryItem from './HistoryItem'

export default {
  name: 'history',
  props: ['blockHistory'],
  components: {
    HistoryItem
  }
}
</script>

<style>

</style>
