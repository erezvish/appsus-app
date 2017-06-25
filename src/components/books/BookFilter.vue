    <template>
        <div>
            <el-row>
                <el-col :sm="24">
                    <el-input class="search-box-filter" @input="searchInput" placeholder="Search book..." size="" icon="search" v-model.lazy="filter.text" :on-icon-click="handleIconClick">
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
            this.$emit('filterSet', { byTitle: '', minPrice: null });
        },
        data() {
            return {
                books: ['book1', 'book2', 'book3'],
                search: '',
                filter: {
                    text: '',
                    bookStatus: 'all'
                },

                
            }
        },
        methods: {
            handleIconClick(ev) {
                console.log(ev);
            },
            searchInput(event) {
                event += '' + event;
                console.log('searching...', event);
            }
        },
        computed: {
            filteredBooks: function () {
                return
            }
        }
    }
    </script>
