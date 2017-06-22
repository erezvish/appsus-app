<template>
  <div id="app">
    <app-header></app-header>
    
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/staticCmps/AppHeader'
export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" >

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
}
 


</style>
