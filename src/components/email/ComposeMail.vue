<template>
  <section class="btn-compose">
    <el-button type="warning" @click.stop="createNewMail()">New mail</el-button>
    
    <el-popover
  ref="popover4"
  placement="right"
  width="400"
  trigger="click">

    <el-form 
      :model="ruleForm2" 
      :rules="rules2" 
      ref="ruleForm2" 
      label-width="120px" 
      class="demo-ruleForm">

      <el-input
        type="textarea"
        autosize
        placeholder="Subject"
        v-model="subject-input">
      </el-input>
     
      <div style="margin: 20px 0;"></div>
      
      <el-input
        type="textarea"
        :autosize="{ minRows: 15, maxRows: 24}"
        placeholder="Message..."
        v-model="body-input">
      </el-input>
      <div style="margin: 20px 0;"></div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
        <el-button @click="resetForm('ruleForm2')">Reset</el-button>
      </el-form-item>
  </el-form>


</el-popover>

<el-button v-popover:popover4>New mail</el-button>


  </section>
</template>
<script>

export default {
  name: 'compose-mail',
  data() {
    return {
      subject-input: ''
      body-input: '',
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