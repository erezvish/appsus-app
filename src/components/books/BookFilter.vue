    <template>
    <div>
        <el-row>
            <el-col :sm="24">
                <el-input class="search-box-filter" placeholder="Search book..." size="" icon="search" v-model.lazy="filter">
                </el-input>
                <h3>{{ filter.text }}</h3>
            </el-col>
        </el-row>
    </div>
</template>

    <style lang="scss" scoped>
// * {
//     border: 1px solid #333;
// }
.search-box-filter {
    margin: 1em;
}
</style>

    <script>
export default {
    name: 'book-filter',
    created() {
        this.$watch('filter', function (newVal, oldVal) {
            // console.log('sending filter', this.filter);
            this.$emit('set-filter', this.filter);
        })
    },
    data() {
        return {
            books: ['book1', 'book2', 'book3'],
            filter: '',
        }
    },
}
</script>
