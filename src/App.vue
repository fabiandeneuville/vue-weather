<template>
  <div id="app">
    
    <headerBlock></headerBlock>
    <searchBlock></searchBlock>


  </div>
</template>

<script>

import headerBlock from './components/header'
import searchBlock from './components/search.vue'

export default {
  name: 'App',
  components: {
      'headerBlock' : headerBlock,
      'searchBlock' : searchBlock
  }
}
</script>

<style lang="scss">

  @import './style/main.scss';

</style>
