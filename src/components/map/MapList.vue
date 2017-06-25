<template>
  <section>
    <el-dropdown class="marker-list" @command="handleCommand">
      <span class="el-dropdown-link">
        Your Places
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" :hide-on-click="true">
        <el-dropdown-item class="drop-item" v-for="marker in markers" :key="marker.id" command="marker.id">{{marker.title}}
          <el-button class="el-icon-edit"> </el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  
  </section>
</template>

<script>
export default {
  name: 'map-list',
  components: {
  },
  props: ['markers'],
  data() {
    return {
    }
  },

  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
      console.log(this)
    },
    dropDownClicked(marker) {
      console.log('I am the marker clicked:', marker);
    }
  }
}
</script>

<style lang="scss" scoped>
.marker-list {
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.4em;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
}

.drop-item {
  display: flex;
  justify-content: space-between;
  img {
    height: 20px;
  }
  button {
    margin: 0.15em;
    padding: 0.2em;
  }
}
</style>
