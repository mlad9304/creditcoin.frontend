<template>
  <div class="page-wrapper">
    <div class="section">
      <div class="container w-container">
        <div class="page-header">
          <div>
            <h1>Blocks</h1>
          </div>
          <div class="calendar-widget"></div>
        </div>
      </div>
    </div>
    <div class="container w-container">
      <div class="blocks-by-date-wrapper">
        <div class="blocks-by-date">
          <div class="table-header">
            <div class="w-layout-grid grid-5">
              <div>Height</div>
              <div id="w-node-d5f1da98ac5d-86e241c5">TIMESTAMP</div>
              <div>Transactions</div>
              <div>Mined by</div>
            </div>
          </div>
          <BlockList :blocks="blocksByDate" />
        </div>
        <div class="ghost-block-1"></div>
        <div class="ghost-block-2"></div>
        <div class="ghost-block-3"></div>
      </div>
    </div>
    <div class="section-2"><a href="#" class="button-2 w-button">Next </a></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BlockList from './components/BlockList'

export default {
  name: 'blocks',
  methods: {
    ...mapActions(['fetchBlocksByDate'])
  },
  computed: {
    ...mapGetters(['blocksByDate'])
  },
  created () {
    this.fetchBlocksByDate()
  },
  components: {
    BlockList
  }
}
</script>

<style>

</style>
