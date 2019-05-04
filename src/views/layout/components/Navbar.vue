<template>
  <div class="navbar-wrapper">
    <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">
      <div class="container navbar-container w-container">
        <router-link to="/" class="brand w-nav-brand w--current">
          <img src="@/assets/images/logo2x.png" width="250" alt="">
        </router-link>
        <div class="navbar-right">
          <nav role="navigation" class="nav-menu w-nav-menu">
            <router-link to="/transactions" class="nav-link w-nav-link">TRANSACTIONS</router-link>
            <router-link to="/blocks" class="nav-link w-nav-link">BLOCKS</router-link>
            <a href="#" class="nav-link w-nav-link">GLUWA</a>
          </nav>
          <div class="form-block w-form">
            <form id="email-form" name="email-form" data-name="Email Form" class="form"><input type="email" class="text-field w-input" maxlength="256" name="search-2" data-name="Search 2" placeholder="Search for block, txhash or address" id="search-2" required=""><input type="submit" data-wait="Please wait..." value=" " class="submit-button w-button"></form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <a @click.stop="toggleMobileSearch" data-w-id="0f60cadd-d854-c831-ed26-eccf9ef3e2b5" href="#" class="search-mobile w-inline-block">
            <img src="@/assets/images/icon-search.svg" width="14" alt="">
          </a>
        </div>
        <div @click="toggleNavMenu" class="menu-button w-nav-button" :class="{'w--open': isOpenNavMenu}">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
      <mq-layout :mq="['sm', 'md', 'lg']">
        <div class="w-nav-overlay" data-wf-ignore="" :class="{active: isOpenNavMenu}" @click="clickMenuOverlay">
          <nav
            role="navigation"
            class="nav-menu w-nav-menu w--nav-menu-open"
            :class="{'active': isOpenNavMenu}"
          >
            <router-link to="/transactions" class="nav-link w-nav-link w--nav-link-open" style="max-width: 1320px;">TRANSACTIONS</router-link>
            <router-link to="/blocks" class="nav-link w-nav-link w--nav-link-open" style="max-width: 1320px;">BLOCKS</router-link>
            <a href="#" class="nav-link w-nav-link w--nav-link-open" style="max-width: 1320px;">GLUWA</a>
          </nav>
        </div>
      </mq-layout>
    </div>
    <mq-layout mq="md">
      <div data-w-id="0f60cadd-d854-c831-ed26-eccf9ef3e2b9" class="search-mobile-block" :class="{active: isActiveMobileSearch}">
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
    </mq-layout>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      isActiveMobileSearch: false,
      isOpenNavMenu: false
    }
  },
  methods: {
    toggleMobileSearch () {
      this.isActiveMobileSearch = !this.isActiveMobileSearch
      this.isOpenNavMenu = false
    },
    toggleNavMenu () {
      this.isOpenNavMenu = !this.isOpenNavMenu
      this.isActiveMobileSearch = false
    },
    clickMenuOverlay () {
      this.isOpenNavMenu = false
    }
  }
}
</script>

<style scoped>
  .search-mobile-block {
    transform: translate3d(0px, -200px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    transition: all .8s;
  }
  .search-mobile-block.active {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
  .w-nav-overlay {
    display: none;
  }
  .w-nav-overlay.active {
    height: 2856px;
    display: block;
  }
  .w-nav-menu-open {
    transform: translateY(-200px) translateX(0px);
    transition: all 1s;
  }
  .w-nav-menu-open.active {
    transform: translateY(0px) translateX(0px);
  }
</style>
