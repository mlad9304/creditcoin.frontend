<template>
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
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>

</style>
