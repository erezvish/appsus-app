<template>
    <section class="cover">   
        <div class=" popup book-edit">
            <el-row gutter="10">
                <h1 v-if="book">Now editing: <span>{{book.title}}</span></h1>
                <h1 v-else>New Book</h1>

                <el-col :xs="18"  :sm="18" :md="18">
                    <el-input type="text" placeholder="title" autofocus v-model="bookToEdit.title"/>
                </el-col>

                <el-col :xs="6"  :sm="6" :md="6">
                    <el-input type="number" min="0" placeholder="price" v-model="bookToEdit.price"/>
                </el-col>
                <div class="space"></div>
                <el-col :md="24">
                    <el-input type="text" placeholder="description" v-model="bookToEdit.description"/>
                </el-col>
            
            </el-row>   

            <div class="ctrl">

                <el-button type="success" @click="save">Save</el-button>
                <el-button type="default" @click="cancel">Cancel</el-button>
            </div>
        
        </div>
    </section>  
</template>

<script>
export default {
  name: 'book-edit',
    created(){
        this.bookToEdit = Object.assign({}, this.book)
    },
    props: ['book'],
    data(){
        return {
            bookToEdit: null
        }
    },
    methods: {
        save() {
            this.$emit('save', this.bookToEdit)
        },
        cancel() {
            this.bookToEdit = null
            this.$emit('cancelEdit')
        }
    }
}
</script>

<style lang="scss" scoped>

.cover {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.book-edit {
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

.ctrl {
    margin: 1em 0;
}

.space {
    height: 3em;
}
</style>