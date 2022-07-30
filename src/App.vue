<template>
  <div id="app">
    
    <headerBlock></headerBlock>


  </div>
</template>

<script>

import headerBlock from './components/header'

export default {
  name: 'App',
  components: {
      'headerBlock': headerBlock
  }
}
</script>

<style lang="scss">

  @import './style/main.scss';

</style>
