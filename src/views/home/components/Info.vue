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
              <div class="blockchain-small-number">{{blockHeight}}</div>
            </div>
            <div id="w-node-904e671baaf2-146d1efd" class="div-block-12">
              <div class="text-block-2">Difficulty:</div>
              <div class="blockchain-small-number text-truncate">{{difficulty}}</div>
            </div>
            <div class="div-block-12">
              <div class="text-block-2">Connections:</div>
              <div class="blockchain-small-number">10</div>
            </div>
            <div class="div-block-12">
              <div class="text-block-2">Block Reward:</div>
              <div class="blockchain-small-number">{{blockReward}} CREC</div>
            </div>
            <div id="w-node-1afcb2d6ec37-146d1efd" class="div-block-12">
              <div class="text-block-2">Network Weight:</div>
              <div class="blockchain-small-number text-truncate">{{networkWeight}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { numberFormatter, crecFormatter } from '@/utils/formatters'

export default {
  name: 'info',
  props: ['blockchainInfo'],
  computed: {
    circulationSupply () {
      return crecFormatter(this.blockchainInfo.circulationSupply, 8)
    },
    blockHeight () {
      return numberFormatter(this.blockchainInfo.blockHeight, 0)
    },
    difficulty () {
      return numberFormatter(this.blockchainInfo.difficulty, 0)
    },
    blockReward () {
      return crecFormatter(this.blockchainInfo.blockReward, 8)
    },
    networkWeight () {
      return numberFormatter(this.blockchainInfo.networkWeight, 0)
    }
  }
}
</script>

<style>

</style>
