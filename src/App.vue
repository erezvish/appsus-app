<template>
  <div id="app">
    
    <app-header></app-header>
    <!--<div class="container">-->
      <router-view></router-view>
    <!--</div>-->
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

// * {
//   border: 1px solid rgba(0,0,0,0.04);
// }

body {
  margin: 0;
  min-width: 330px;
}

// .container {
//   max-width: 1200px;
// }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  color: #2c3e50;
  min-width: 330px;
  
  // background: #f4f4f4;
  background-image: "assets/img/vue.jpg";
}
 


</style>
