<template>
  <section class="list">
   
      <el-col :xs="12" :sm="14" :md="14"  >
        <h1><i class="fa fa-info-circle" aria-hidden="true"></i> &nbsp; Email Details </h1>
        <h2>{{selectedMail.subject}} </h2>
        <el-button type="danger" @click.stop="deleteMsg()">delete</el-button>
      </el-col>
   
  </section>
</template>
<script>

export default {
  props: ['selectedMail'],
  name: 'email-details',
  methods: {
    deleteMsg() {
      this.$emit('delete');
      
    }
  }
}
</script>
<style lang="scss" scoped>


</style>
