<template>
    <div>
        <el-input class="search-box-filter" placeholder="Filter books..." size="" icon="search" v-model.lazy="filter.text" :on-icon-click="handleIconClick">
        </el-input>
    </div>
</template>

<style lang="scss" scoped>

.search-box-filter {
    margin: 1em;
}

</style>

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
        filteredBooks: function () {
            return
        }
    }
}
</script>
