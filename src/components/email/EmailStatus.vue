<template>
  <section class="status">
    <h1>Status goes here</h1>
    <button @click.stop="showStatus()"></button>
  </section>
</template>
<script>
export default {
  name: 'email-status',
  methods: {
    createNewMail() {
      this.$emit('status');
      
    }
  }
}
</script>
<style lang="scss" scoped>

// .status {
//   background: lightblue;
// }

</style>