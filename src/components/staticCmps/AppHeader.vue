<template>
    <section>
        <div class="placeholder"></div>
        <app-nav> </app-nav>
      <h1> Appsus </h1>
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
