<template>
  <div id="app">
    
    <headerBlock></headerBlock>
    <searchBlock></searchBlock>
    <weatherDisplay></weatherDisplay>

  </div>
</template>

<script>

import headerBlock from './components/header'
import searchBlock from './components/search.vue'
import weatherDisplay from './components/weather.vue'

export default {
  name: 'App',
  components: {
      'headerBlock' : headerBlock,
      'searchBlock' : searchBlock,
      'weatherDisplay' : weatherDisplay
  }
}
</script>

<style lang="scss">

  @import './style/main.scss';

</style>
