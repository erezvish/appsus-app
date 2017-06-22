<template>
    <li class="book-preview">
        <h2>{{book.title}}</h2>
        <img src="http://via.placeholder.com/250x150">
        <h3>${{book.price}}</h3>
        <button @click.stop="editBook">&#9998;</button>
        <button @click.stop="deleteBook">&times;</button>
        <button @click.stop="addToCart">+</button>
        <span v-if="book.quantity">{{book.quantity}}</span>
        <button @click.stop="substractFromCart">-</button>
        <br/>
        <router-link :to="`/book/${book.id}`">View Book</router-link>
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

<style>
li {
    display: inline-block;
}

.book-preview {
    padding: 20px 0;
    background: white;
    text-align: center;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px 2px rgba(0,0,0,0.7);
    cursor: pointer;
}

</style>
