<template>
  <section >
    <el-button type="danger" @click="ok">New mail</el-button>
    <el-row  v-show="active">
      <el-col  class="cover" :md="24">
      
        <el-form ref="form" :model="form"  class="popup">
            <h3>Compose new mail:</h3>
          <!--<el-form-item>-->
            <el-input v-model="form.subject" placeholder="Subject"></el-input>
          <!--</el-form-item>-->
            <div class="space"></div>
          <!--<el-form-item>-->
            <el-input type="textarea"  v-model="form.desc" placeholder="Your message..."></el-input>
          <!--</el-form-item>-->
            <div class="space"></div>
          <!--<el-form-item>-->
            <div class="control-btn">
              <el-button type="primary" @click="onSubmit">Send</el-button>
              <el-button @click="onCancel">Cancel</el-button>
              <el-button type="danger" @click="onReset">Reset</el-button>
            </div>
          <!--</el-form-item>-->
      
        </el-form>
      </el-col>
    </el-row>
  </section>
</template>

<style lang="scss" scoped>

// * {
//   border: 1px solid #fff;
// }

.compose-mail {
  display: flex;
  flex-direction: column;
}

.btn-compose {
  display: flex;
  justify-content: flex-start;
}

.cover {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  display: flex;
  
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.ctrl {
    margin: 1em 0;
}

.space {
    height: 1em;
}

.popup {
    text-align:center;
    padding: 1em;
    color: #343E52;
    // background: rgba(52, 62, 82,0.9);
    background: #EAF7FB;
    border-radius: 25px;
    
    max-width: 700px;
    display: flex;
    flex-direction: column;
    margin: 2em  0;
}
</style>

<script>
export default {
  name: 'compose-mail',
  data() {
    return {
      form: {
        subject: '',
        body: 'msg body'
      },
      active:false,
    }
  },
  methods: {
    createNewMail() {
      this.$emit('compose-mail');

    },
    onSubmit() {
      console.log('submit!');
    },
    onReset() {
      console.log('reset!');
    },
    onCancel() {
      console.log('canceled!');
      this.active = !this.active;
    },
    ok() {
      console.log('ok');
      this.active = !this.active;
    }
  }
}
</script>
