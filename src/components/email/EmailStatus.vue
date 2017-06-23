<template>
  <section class="status">
    <h5>Mails Read </h5>
    <el-progress class="progress-bar" :text-inside="true" :stroke-width="18" :percentage="progress"></el-progress>
  </section>
</template>
<script>
export default {
  name: 'email-status',
  props: ['progress'],
}

</script>
<style lang="scss" scoped>
.status {
  max-width: 90%;
  margin: 0.3em;
}
</style>