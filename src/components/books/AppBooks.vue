<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import BookList from './components/BookList'
export default {
  name: 'app'
 }
</script>

<style>
body {
  background: #efefef;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

h1,
h2,
h3,
h4 {
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
}

button {
    height: 50px;
    min-width: 50px;
    outline: none;
    font-size: 2em;
    line-height: 0.9;
    cursor: pointer;
}
</style>
