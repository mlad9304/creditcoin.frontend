<template>
  <div class="page-wrapper">
    <div class="container w-container">
      <h2>Transaction</h2>
      <div class="w-layout-grid grid-15">
        <div class="address-left">
          <div class="text-block-5">0x{{transactionId | summarize(64)}}...</div>
          <a href="#" class="link-block w-inline-block">
            <img src="@/assets/images/copy_icon.svg" width="17" alt="">
          </a>
        </div>
        <div id="w-node-2ade7bcdb8d3-400a123e" class="tx-status">
          <img src="@/assets/images/icon-confirmed2x.svg" width="16" alt="" class="icon-status">
          <div class="text-block-10">Confirmed</div>
        </div>
      </div>
      <div class="block no-padding">
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-7944e21a1cc9-400a123e" class="text-block-7"><strong>Size:</strong></div>
            <div id="w-node-c63a6c72f6d0-400a123e" class="text-block-7-copy">{{block.size}} [bytes]</div>
          </div>
        </div>
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-ae0a92bf9dc2-400a123e" class="text-block-7"><strong>Mined Time:</strong></div>
            <div id="w-node-ae0a92bf9dc5-400a123e" class="text-block-7-copy">{{block.timestamp | datetimeFormatter}}</div>
          </div>
        </div>
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-ae0a92bf9dc2-400a123e" class="text-block-7"><strong>Created by:</strong></div>
            <div id="w-node-ae0a92bf9dc5-400a123e" class="text-block-7-copy">{{transaction.sighash}}</div>
          </div>
        </div>
        <div class="row last">
          <div class="w-layout-grid grid-14">
            <div id="w-node-92b42f2a0c4e-400a123e" class="text-block-7"><strong>Included in Block:</strong></div>
            <a id="w-node-94f458a05676-400a123e" href="#" class="div-block-10 text-truncate w-inline-block">
              <div class="text-block-4 text-truncate">0x{{blockId | summarize(64)}}...</div>
              <img src="@/assets/images/icon-arrow-right.svg" width="9" alt="" class="image">
            </a>
          </div>
        </div>
      </div>
      <div class="block small-padding">
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
          <div id="w-node-938d61d547f2-400a123e" class="hash-amount-block">
            <div>Amount:&nbsp;</div>
            <div class="hash-amount">10 CREC</div>
          </div>
          <div id="w-node-1c6126d7169c-400a123e" class="hash-amount-block">
            <div>Fee:&nbsp;</div>
            <div class="hash-amount">0.1 CREC</div>
          </div>
          <div id="w-node-f87fbfa5e868-400a123e" class="hash-amount-block">
            <div>Received:&nbsp;</div>
            <div class="hash-amount">0.9 CREC</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'transaction-detail',
  methods: {
    ...mapActions(['fetchBlockForTx'])
  },
  computed: {
    ...mapGetters(['blockForTx']),
    blockId () {
      if (!this.blockForTx) return null
      return Object.keys(this.blockForTx)[0]
    },
    block () {
      if (!this.blockForTx || !this.blockId) return null
      return this.blockForTx[this.blockId]
    },
    transaction () {
      if (!this.block || !this.block.transactions) return {}
      return this.block.transactions[Object.keys(this.block.transactions)[0]]
    },
    transactionId () {
      if (!this.block || !this.block.transactions) return ''
      return Object.keys(this.block.transactions)[0]
    }
  },
  created () {
    this.fetchBlockForTx(this.$route.params.transaction_id)
  }
}
</script>

<style>

</style>
