<template>
  <div>
    <h2>Blockchain Info</h2>
    <div class="block credit-coin-block">
      <div>
        <div class="text-block">Total supply</div>
        <div class="card-big-number">{{totalSupply | numberFormatter}} CREC</div>
        <div class="text-block">Circulation Supply</div>
        <div class="card-big-number">{{blockchainInfo.circulationSupply | crecFormatter}} CREC</div>
        <div class="blockhain-info-details">
          <div class="w-layout-grid grid-2">
            <div class="div-block-12">
              <div class="text-block-2">Relay Fee:</div>
              <div class="blockchain-small-number">{{blockchainInfo.trnsactionFee | crecFormatter}}</div>
            </div>
            <div class="div-block-12">
              <div class="text-block-2">Block Height:</div>
              <div class="blockchain-small-number">{{blockchainInfo.blockHeight | numberFormatter}}</div>
            </div>
            <div id="w-node-904e671baaf2-146d1efd" class="div-block-12">
              <div class="text-block-2">Difficulty:</div>
              <div class="blockchain-small-number text-truncate">{{blockchainInfo.difficulty | numberFormatter}}</div>
            </div>
            <div class="div-block-12">
              <div class="text-block-2">Connections:</div>
              <div class="blockchain-small-number">10</div>
            </div>
            <div class="div-block-12">
              <div class="text-block-2">Block Reward:</div>
              <div class="blockchain-small-number">{{blockchainInfo.blockReward | crecFormatter}} CREC</div>
            </div>
            <div id="w-node-1afcb2d6ec37-146d1efd" class="div-block-12">
              <div class="text-block-2">Network Weight:</div>
              <div class="blockchain-small-number text-truncate">{{blockchainInfo.networkWeight | numberFormatter}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  props: ['totalSupply', 'blockchainInfo']
}
</script>

<style>

</style>
