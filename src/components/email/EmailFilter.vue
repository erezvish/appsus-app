<template>
  <section>
    <!--<h1>I am a Filter </h1>-->
    <el-radio-group class="buttons-filter" v-model.lazy="filter.emailStatus">

    </el-radio-group>
    <el-input class="filter-text" placeholder="Enter Text to Filter and Press Enter" 
              size="mini" icon="search" v-model.lazy="filter.txt" :on-icon-click="handleIconClick">
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
      }),
        this.$watch('filter.emailStatus', function (newVal, oldVal) {
        console.log('sending filter - status change');
        this.$emit('set-filter', this.filter);
      })
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .filter-text {
    width: 90%;
    margin-top: 0.5em;
  }

  .buttons-filter {
    float: left;
    .el-radio-button {
    }
    .el-radio-button:first-child {
      margin-left: 40px;
    }
  }
</style>