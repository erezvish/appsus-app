<template>
  <section>
    <h1>Email Details </h1>
    <h2>{{selectedMail.subject}} </h2>
  </section>
</template>
<script>
export default {
  props: ['selectedMail'],
  name: 'email-details'
}
</script>
<style lang="scss" scoped>

</style>
