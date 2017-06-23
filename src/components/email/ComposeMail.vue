<template>
  <section class="btn-compose">
    <el-button type="warning" @click.stop="createNewMail()">New mail</el-button>
  </section>
</template>
<script>

export default {
  name: 'compose-mail',
  data() {
    return {
      subjectInput:'',
      bodyInput: ''
    }
  },
  methods: {
    createNewMail() {
      this.$emit('compose-mail');
      
    },
    resetForm(ruleForm2) {
      console.log('reset form...')
      this.$refs[formName].resetFields();
    },
    submitForm(ruleForm2) {
      console.log('submit form...')
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>

.btn-compose {
  display: flex;
  justify-content: flex-start;
}

</style>