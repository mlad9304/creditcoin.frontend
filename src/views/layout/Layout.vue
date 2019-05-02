<template>
  <div>
    <Navbar />
    <AppMain />
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
