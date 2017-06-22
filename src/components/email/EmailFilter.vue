<template>
  <section>
    <!--<h1>I am a Filter </h1>-->
    <el-radio-group v-model="filter.emailStatus">
      <el-radio-button label="All"></el-radio-button>
      <el-radio-button label="Read"></el-radio-button>
      <el-radio-button label="Unread"></el-radio-button>
    </el-radio-group>
    <el-input class="filter-text" placeholder="Filter Mails" size="mini" icon="search" v-model="filter.txt" :on-icon-click="handleIconClick">
    </el-input>
  </section>
</template>
<script>
  export default {
    name: 'email-filter',
    data() {
      return {
        filter: {
          txt: '',
          emailStatus: 'all'
        }
      }
    },
        created() {
        this.$watch('filter.txt', function (newVal, oldVal) {
          console.log('sending filter - text change');
          this.$emit('set-filter', this.filter);
        })
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev);
      },
      btnClicked() {
        console.log('sending filter - status change');
        this.$emit('set-filter', this.filter);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .filter-text {
    width: 90%;
  }

  .buttons-filter {
    margin: 0.3em;
    float: left;
    .el-radio-button {
      margin: 0.1em;
    }
    .el-radio-button:first-child {
      margin-left: 40px;
    }
  }
</style>