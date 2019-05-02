<template>
  <div>
    <h2>Blockchain Info</h2>
    <div class="block credit-coin-block">
      <div>
        <div class="text-block">Total supply</div>
        <div class="card-big-number">10,000,000 CREC</div>
        <div class="text-block">Circulation Supply</div>
        <div class="card-big-number">{{circulationSupply}} CREC</div>
        <div class="blockhain-info-details">
          <div class="w-layout-grid grid-2">
            <div class="div-block-12">
              <div class="text-block-2">Relay Fee:</div>
              <div class="blockchain-small-number">0.004</div>
            </div>
            <div class="div-block-12">
              <div class="text-block-2">Block Height:</div>
              <div class="blockchain-small-number">329,541</div>
            </div>
            <div id="w-node-904e671baaf2-146d1efd" class="div-block-12">
              <div class="text-block-2">Difficulty:</div>
              <div class="blockchain-small-number text-truncate">3,545,099.39080108</div>
            </div>
            <div class="div-block-12">
              <div class="text-block-2">Connections:</div>
              <div class="blockchain-small-number">10</div>
            </div>
            <div class="div-block-12">
              <div class="text-block-2">Block Reward:</div>
              <div class="blockchain-small-number">5 CREC</div>
            </div>
            <div id="w-node-1afcb2d6ec37-146d1efd" class="div-block-12">
              <div class="text-block-2">Network Weight:</div>
              <div class="blockchain-small-number text-truncate">13,563,683.14025867</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { crecFormatter } from '@/utils/formatters'

export default {
  name: 'info',
  props: ['blockchainInfo'],
  computed: {
    circulationSupply () {
      return crecFormatter(this.blockchainInfo.circulationSupply, 5)
    }
  }
}
</script>

<style>

</style>
