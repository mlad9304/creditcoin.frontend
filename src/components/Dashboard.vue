<template>
  <div>
    <div class="navbar-wrapper">
    <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">
      <div class="container navbar-container w-container"><a href="index.html" class="brand w-nav-brand w--current"><img src="@/assets/images/logo2x.png" width="250" alt=""></a>
        <div class="navbar-right">
          <nav role="navigation" class="nav-menu w-nav-menu"><a href="#" class="nav-link w-nav-link">TRANSACTIONS</a><a href="#" class="nav-link w-nav-link">BLOCKS</a><a href="#" class="nav-link w-nav-link">GLUWA</a></nav>
          <div class="form-block w-form">
            <form id="email-form" name="email-form" data-name="Email Form" class="form"><input type="email" class="text-field w-input" maxlength="256" name="search-2" data-name="Search 2" placeholder="Search for block, txhash or address" id="search-2" required=""><input type="submit" data-wait="Please wait..." value=" " class="submit-button w-button"></form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div><a data-w-id="0f60cadd-d854-c831-ed26-eccf9ef3e2b5" href="#" class="search-mobile w-inline-block"><img src="@/assets/images/icon-search.svg" width="14" alt=""></a></div>
        <div class="menu-button w-nav-button">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
    <div data-w-id="0f60cadd-d854-c831-ed26-eccf9ef3e2b9" class="search-mobile-block">
      <div class="form-block mobile w-form">
        <form id="email-form" name="email-form" data-name="Email Form" class="form"><input type="email" class="text-field w-input" maxlength="256" name="search-2" data-name="Search 2" placeholder="Search for block, txhash or address" id="search-2" required=""><input type="submit" data-wait="Please wait..." value=" " class="submit-button w-button"></form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="page-wrapper">
    <div class="container w-container">
      <div class="w-layout-grid grid">
        <div>
          <h2>Blockchain Info</h2>
          <div class="block credit-coin-block">
            <div>
              <div class="text-block">Total supply</div>
              <div class="card-big-number">10,000,000 CREC</div>
              <div class="text-block">Circulation Supply</div>
              <div class="card-big-number">1,000,000 CREC</div>
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
          <h2>Transaction</h2>
          <div class="block">
            <ul class="list w-list-unstyled">
              <li class="transaction-item">
                <div class="w-layout-grid grid-3">
                  <div>
                    <a href="#" class="hash-link w-inline-block">
                      <div class="text-block-3">Hash:</div>
                      <div class="hash-number text-truncate">03ef0116Ka548Cu…</div><img src="@/assets/images/icon-arrow-right.svg" width="9" alt=""></a>
                    <div class="hash-amount-block">
                      <div>Amount:&nbsp;</div>
                      <div class="hash-amount">10 CREC</div>
                    </div>
                  </div>
                  <div class="hash-timestamp">a few seconds ago</div>
                </div>
              </li>
              <li class="transaction-item">
                <div class="w-layout-grid grid-3">
                  <div id="w-node-d8eb60f5ab2f-146d1efd">
                    <a href="#" class="hash-link w-inline-block">
                      <div class="text-block-3">Hash:</div>
                      <div class="hash-number text-truncate">03ef0116Ka548Cu…</div><img src="@/assets/images/icon-arrow-right.svg" width="9" alt=""></a>
                    <div class="hash-amount-block">
                      <div>Amount:&nbsp;</div>
                      <div class="hash-amount">10 CREC</div>
                    </div>
                  </div>
                  <div class="hash-timestamp">1 minute ago</div>
                </div>
              </li>
              <li class="transaction-item">
                <div class="w-layout-grid grid-3">
                  <div id="w-node-b93a7160ce67-146d1efd">
                    <a href="#" class="hash-link w-inline-block">
                      <div class="text-block-3">Hash:</div>
                      <div class="hash-number text-truncate">03ef0116Ka548Cu…</div><img src="@/assets/images/icon-arrow-right.svg" width="9" alt=""></a>
                    <div class="hash-amount-block">
                      <div>Amount:&nbsp;</div>
                      <div class="hash-amount">10 CREC</div>
                    </div>
                  </div>
                  <div class="hash-timestamp">2 minutes ago</div>
                </div>
              </li>
            </ul><a href="#" class="button w-button">SEE MORE TRANSACTIONS</a></div>
        </div>
        <div>
          <h2>Block History</h2>
          <div class="block">
            <ul class="block-history-list w-list-unstyled">
              <li class="block-history-item">
                <div class="w-layout-grid grid-4">
                  <div class="block-history-block">
                    <div class="block-id">BLOCK 123456</div>
                    <div>2 minutes ago</div>
                  </div>
                  <div class="block-history-details">
                    <a href="#" class="hash-link w-inline-block">
                      <div class="text-block-3">Miner:</div>
                      <div class="hash-number text-truncate">03ef0116Ka548Cu…</div><img src="@/assets/images/icon-arrow-right.svg" width="9" alt=""></a>
                    <div class="hash-amount-block">
                      <div>Transactions:&nbsp;</div>
                      <div class="hash-amount">100</div>
                    </div>
                    <div class="spacpe-h-5px"></div>
                    <div class="hash-amount-block">
                      <div>Size:&nbsp;</div>
                      <div class="hash-amount">2984</div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="block-history-item">
                <div class="w-layout-grid grid-4">
                  <div id="w-node-f50bdcaae1e7-146d1efd" class="block-history-block">
                    <div class="block-id">BLOCK 123456</div>
                    <div>2 minutes ago</div>
                  </div>
                  <div class="block-history-details">
                    <a href="#" class="hash-link w-inline-block">
                      <div class="text-block-3">Miner:</div>
                      <div class="hash-number text-truncate">03ef0116Ka548Cu…</div><img src="@/assets/images/icon-arrow-right.svg" width="9" alt=""></a>
                    <div class="hash-amount-block">
                      <div>Transactions:&nbsp;</div>
                      <div class="hash-amount">100</div>
                    </div>
                    <div class="spacpe-h-5px"></div>
                    <div class="hash-amount-block">
                      <div>Size:&nbsp;</div>
                      <div class="hash-amount">2984</div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="block-history-item">
                <div class="w-layout-grid grid-4">
                  <div class="block-history-block">
                    <div class="block-id">BLOCK 123456</div>
                    <div>2 minutes ago</div>
                  </div>
                  <div class="block-history-details">
                    <a href="#" class="hash-link w-inline-block">
                      <div class="text-block-3">Miner:</div>
                      <div class="hash-number text-truncate">03ef0116Ka548Cu…</div><img src="@/assets/images/icon-arrow-right.svg" width="9" alt=""></a>
                    <div class="hash-amount-block">
                      <div>Transactions:&nbsp;</div>
                      <div class="hash-amount">100</div>
                    </div>
                    <div class="spacpe-h-5px"></div>
                    <div class="hash-amount-block">
                      <div>Size:&nbsp;</div>
                      <div class="hash-amount">2984</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul><a href="#" class="button w-button">SEE BLOCKS BY DATE</a></div>
          <h2>About</h2>
          <div class="block">
            <div>Creditcoin is a super awesome thing that everybody should have, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

<style>

</style>
