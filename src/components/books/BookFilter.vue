<template>
    <div>
        <h1>I am a FILTER!!!</h1>
        <input type="text" v-model="search" placeholder="Search...">
            <el-radio-group class="buttons-filter" v-model.lazy="filter.emailStatus">
      <el-radio-button label="all">All</el-radio-button>
      <el-radio-button label="read">Read</el-radio-button>
      <el-radio-button label="unread">Unread</el-radio-button>
    </el-radio-group>
    <el-input class="filter-text" placeholder="Filter books..." 
              size="mini" icon="search" v-model.lazy="filter.text" :on-icon-click="handleIconClick">
    </el-input>
    </div>
</template>

<script>
export default {
    name: 'book-filter',
    created() {
        this.$emit('filterSet', { byTitle: '', minPrice: null });
    },
    data() {
        return {
            books: ['book1', 'book2', 'book3'],
            search: '',
            filter: {
                text: '',
                bookStatus: 'all'
            }
        }
    },
    methods: {
        handleIconClick(ev) {
        console.log(ev);
      }
    },
    computed: {
        filteredBooks: function() {
            return 
        }
    }
}
</script>
