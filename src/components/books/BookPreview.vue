<template>
    <li class="book-preview">
        <img src="http://via.placeholder.com/150x200">
        <h2>{{book.title}}</h2>
        <h3>${{book.price}}</h3>
        <el-row>
        <el-button type="default" @click.stop="addToCart">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </el-button>
    
        <span v-if="book.quantity">{{book.quantity}}</span>
    
        <el-button type="default" @click.stop="substractFromCart">
            <i class="fa fa-minus-circle" aria-hidden="true"></i>
        </el-button>
    
        <el-button type="default" @click.stop="editBook">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </el-button>
    
        <el-button type="danger" @click.stop="deleteBook">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
        </el-button>
        </el-row>
       <br>
        <!--<router-link :to="`/book/${book.id}`">View Book</router-link>-->
    </li>
</template>

<script>
export default {
    name: 'book-preview',
    props: ['book'],
    methods: {
        editBook() {
            console.log('Request Edit');
            this.$emit('edit');
        },
        deleteBook() {
            console.log('Request Delete');
            this.$emit('delete');
        },
        addToCart() {
            console.log('adding to cart');
            this.$emit('addToCart');
        },
        substractFromCart() {
            this.$emit('substractFromCart');
        }
    }
}
</script>

<style lang="scss" scoped>
li {
    display: inline-block;
}

li el-row:nth-child(1) {
    color: orange;
}
.book-preview {
    padding: 10px 0;
    background: lightyellow;
    text-align: center;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    
}

.fa {
    font-size: 1.4em;
}
</style>
