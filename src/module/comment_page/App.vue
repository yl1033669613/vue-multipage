<template>
  <div id="app">
    <comment></comment>
  </div>
</template>

<script>
  import "babel-polyfill"
  import 'common/css/reset.css';
  import Comment from 'components/comment/comment_area'

  export default {
    name: 'app',
    components: {
      Comment
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
