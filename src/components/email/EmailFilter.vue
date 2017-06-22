<template>
  <section>
    <!--<h1>I am a Filter </h1>-->
    <el-button-group class="buttons-filter">
      <el-button type="primary">all</el-button>
      <el-button type="primary">read</el-button>
      <el-button type="primary">unread</el-button>
    </el-button-group>
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
  }

  .buttons-filter {
    margin: 0.3em;
    float: left;
    .el-button {
      margin: 0.1em;
    }
    .el-button:first-child {
      margin-left: 40px;
    }
  }
</style>