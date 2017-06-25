<template>
  <section class="email-filter">
    <el-row>
        <el-col :xs="24" :md="20">
          <el-row>
              <el-col :xs="12" :sm="8" :md="6">
                <el-radio-group class="btn-group" v-model.lazy="filter.emailStatus">
                    <el-radio label="all">All</el-radio>
                    <el-radio label="read">Read</el-radio>
                    <el-radio label="unread">Unread</el-radio>
                </el-radio-group>
              </el-col>

              <el-col :xs="12" :sm="10" :md="18">
                <el-input class="filter-text" placeholder="Enter Text to Filter" size="mini" icon="search" v-model.lazy="filter.txt" :on-icon-click="handleIconClick">
                </el-input>
              </el-col>
          </el-row>
        </el-col>

        <!--<el-col :sm="12" :md="12">
        </el-col>-->
    </el-row>
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

.email-filter {
  background: rgba(255,255,255,0.4);
  margin: 2em 0 0 0;
  padding: 1.1em 0;
  box-shadow: 0 0 11px rgba(0,0,0,0.4);
}

.btn-group {
    display: flex;
    justify-content: center;

    @media screen and (max-width: 49em) {
      display: none;
    }
}

.filter-text {
  @media screen and (min-width: 499px){
    }
}
// * {
//   border: 1px solid blue;
// }

</style>