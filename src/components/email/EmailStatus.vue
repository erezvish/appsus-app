<template>
  <section class="status">
    <p>Mails Read </p>
    <div>
      <el-progress class="progress-bar" 
                  :text-inside="true" 
                  :stroke-width="18" 
                  :percentage="progress">
      </el-progress>
    </div>
  </section>
</template>
<script>
export default {
  name: 'email-status',
  props: ['progress'],
}

</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Abel|Fjalla+One|Hammersmith+One');

.status {
  background: rgba(255,255,255,0.4);
  font-family: 'Hammersmith One', sans-serif;
  padding: 1.1em 0;
  max-width: 100%;
  margin: 0.3em;
  & p {
    // display: inline-block;
  }
}
</style>