<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from './views/home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="stylus">
#app {
  height: 100%;
  padding: 20px 15px 30px 15px;
}
</style>
