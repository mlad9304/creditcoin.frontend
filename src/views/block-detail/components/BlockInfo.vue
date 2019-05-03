<template>
  <div>
    <h2>Block #{{block.blockNum}}</h2>
    <div class="w-layout-grid grid-13">
      <div id="w-node-e7084625683a-c60a0bb4" class="address-left">
        <div class="text-block-5 text-truncate">0x{{block_id | summarize(64)}}...</div>
        <a href="#" class="link-block w-inline-block"><img src="@/assets/images/copy_icon.svg" width="17" alt=""></a></div>
    </div>
    <div class="w-layout-grid grid-12">
      <div id="w-node-b4965f8630e4-c60a0bb4" class="block no-padding">
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-7944e21a1cc9-c60a0bb4" class="text-block-7"><strong>Number of Transactions:</strong></div>
            <div id="w-node-c63a6c72f6d0-c60a0bb4" class="text-block-7">{{numberOfTransactions}}</div>
          </div>
        </div>
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-101c6fbac764-c60a0bb4" class="text-block-7"><strong>Timestamp:</strong></div>
            <div id="w-node-101c6fbac767-c60a0bb4" class="text-block-7-copy">{{block.timestamp | datetimeFormatter}}</div>
          </div>
        </div>
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-ae0a92bf9dc2-c60a0bb4" class="text-block-7"><strong>Height:</strong></div>
            <div id="w-node-ae0a92bf9dc5-c60a0bb4" class="text-block-7">{{block.blockNum}}</div>
          </div>
        </div>
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-92b42f2a0c4e-c60a0bb4" class="text-block-7"><strong>Block Reward:</strong></div>
            <div id="w-node-92b42f2a0c51-c60a0bb4" class="text-block-7">{{block.blockReward | crecFormatter}} CREC</div>
          </div>
        </div>
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-bcbab515d55d-c60a0bb4" class="text-block-7"><strong>Miner:</strong></div>
            <a id="w-node-cd265e41ac1c-c60a0bb4" href="#" class="div-block-10 w-inline-block">
              <div class="text-block-4 text-truncate">{{block.signerPubKey | summarize(34)}}...</div>
              <img src="@/assets/images/icon-arrow-right.svg" width="9" alt="" class="image">
            </a>
          </div>
        </div>
      </div>
      <div id="w-node-11fe3469c617-c60a0bb4" class="block no-padding">
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-11fe3469c61a-c60a0bb4" class="text-block-7"><strong>Previous Block:</strong></div>
            <div id="w-node-11fe3469c61d-c60a0bb4" class="text-block-7">0x{{block.prevBlockId | summarize(24)}}...</div>
          </div>
        </div>
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-11fe3469c621-c60a0bb4" class="text-block-7"><strong>Difficulty:</strong></div>
            <div id="w-node-11fe3469c624-c60a0bb4" class="text-block-7">{{block.difficulty}}</div>
          </div>
        </div>
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-11fe3469c62f-c60a0bb4" class="text-block-7"><strong>Size:</strong></div>
            <div id="w-node-11fe3469c632-c60a0bb4" class="text-block-7">{{block.size}} [bytes]</div>
          </div>
        </div>
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-a15206e2071f-c60a0bb4" class="text-block-7"><strong>Version:</strong></div>
            <div id="w-node-a15206e20722-c60a0bb4" class="text-block-7">{{block.version}}</div>
          </div>
        </div>
        <div class="row">
          <div class="w-layout-grid grid-14">
            <div id="w-node-cded4130c26b-c60a0bb4" class="text-block-7"><strong>Nonce:</strong></div>
            <div id="w-node-cded4130c26e-c60a0bb4" class="text-block-7">{{block.nonce}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'block-info',
  props: ['block', 'block_id'],
  computed: {
    numberOfTransactions () {
      return Object.keys(this.block.transactions).length
    }
  }
}
</script>

<style>

</style>
