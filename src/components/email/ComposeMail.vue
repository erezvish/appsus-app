<template>
  <section class="compose-mail">
    <el-button class="new-mail-btn" type="danger" @click="onNewButton">New mail</el-button>
    <el-row v-show="active">
      <el-col  class="cover" :md="24">
      
        <el-form ref="form" :model="form" class="popup">
            <h3>Compose new mail:</h3>
            <el-input v-model="form.subject" placeholder="Subject"></el-input>
            
            <div class="space"></div>
            <el-input type="textarea"  v-model="form.body" placeholder="Your message..."></el-input>
            <div class="space"></div>
            
            <div class="control-btn">
              <el-button type="primary" @click="onSubmit">Send</el-button>
              <el-button @click="onCancel">Cancel</el-button>
              <el-button type="danger" @click="onReset">Reset</el-button>
            </div>
   
      
        </el-form>
      </el-col>
    </el-row>
  </section>
</template>

<style lang="scss" scoped>

// * {
//   border: 1px solid #fff;
// }

.new-mail-btn {
  width: 10em;
  height: 3em;
    @media screen and (max-width: 730px){
      // width: initial;
    }
}

.compose-mail {
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 5.2em;
  right: 1em;
}

.btn-compose {
  display: flex;
  justify-content: flex-end;
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
import emailService from '../../services/email.service'
export default {
  name: 'compose-mail',
  data() {
    return {
      form: {
        subject: '',
        body: ''
      },
      active:false,
    }
  },
  methods: {
    createNewMail() {
      this.$emit('compose-mail');

    },
    clearForm() {
      this.form.subject = '';
      this.form.body = '';
    },
    onSubmit() {
      // console.log('submit! callint the server:');
      emailService.sendFormToServer(this.form.subject ,this.form.body);
      this.active = !this.active;
    },
    onReset() {
      console.log('reset!');
      this.clearForm();
    },
    onCancel() {
      console.log('canceled!');
      this.clearForm();
      this.active = !this.active;
    },
    onNewButton() {
      console.log('new mail');
      this.active = !this.active;
    }
  }
}
</script>
