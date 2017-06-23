<template>
  <section class="btn-compose">
    <el-button type="warning" @click.stop="createNewMail()">New mail</el-button>
    
    <!--<el-popover
  ref="popover4"
  placement="right"
  width="400"
  trigger="click">


</el-popover>-->

<el-button v-popover:popover4>New mail</el-button>


  </section>
</template>
<script>

export default {
  name: 'compose-mail',
  methods: {
    createNewMail() {
      this.$emit('compose-mail');
      
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