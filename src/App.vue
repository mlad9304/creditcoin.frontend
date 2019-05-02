<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import './assets/css/normalize.css'
import './assets/css/components.css'
import './assets/css/creditcoin.css'

axios.defaults.baseURL = 'https://creditcoinapi-test.azurewebsites.net'

export default {
  name: 'app'
}
</script>

<style>
</style>
