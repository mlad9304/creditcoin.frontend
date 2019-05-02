<template>
  <div>
    <Navbar />
    <div class="page-wrapper">
      <div class="container w-container">
        <AppMain />
      </div>
    </div>
    <div class="w-embed"></div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'

export default {
  name: 'layout',
  components: {
    Navbar,
    AppMain
  }
}
</script>

<style>

</style>
