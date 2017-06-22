<template>
    <section class="app-header">
        <div class="placeholder"></div>
        <app-nav> </app-nav>
    </section>
</template>

<script>

import AppNav from './AppNav'
export default {
  name: 'app-header',
  components: {
    AppNav
  }

}
</script>

<style lang="scss" scoped>

* { 
    border: 1px solid #333;
}
.app-header {
  display: flex;
  background: #343E52;
  color: white;
  margin-bottom: 1.2em;
}



.placeholder {
    height: 50px;
    background-color: lightblue;
}

section {
    h1 {
        color: darkblue;
    }
}
</style>
