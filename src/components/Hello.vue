<template>
  <el-row class="home">
    <el-col :xs="24" class="app-pointer">
      <div class="img-box">
        <router-link to="/map">
          <img src="../assets/img/app-map-logo.png">
        </router-link>
      </div>
      <h1>Maps App</h1>
    </el-col>
  
    <el-col :xs="24" class="app-pointer">
      <div class="img-box">
        <router-link to="/books">
          <img src="../assets/img/ninja-books.png">
        </router-link>
      </div>
      <h1>Books App</h1>
    </el-col>
  
    <el-col :xs="24" class="app-pointer">
      <div class="img-box">
        <router-link to="/mail">
          <img src="../assets/img/app-mail-logo.png">
        </router-link>
      </div>
      <h1>Email App</h1>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// * {
//   border: 1px solid green;
// }
.app-pointer:hover {
  cursor: pointer;
}

.home {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  padding-top: 3em; // flex-wrap: wrap;
  & img {
    width: 100%;
    max-width: 400px;
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
