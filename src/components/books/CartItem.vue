<template>
    <li class="cart-item">
        <h3>{{book.title}}</h3>
        <h3>{{book.price}}</h3>
        <button @click.stop="add">+</button>
        <span>{{book.quantity}}</span>
        <button @click.stop="substract">-</button>
        <button @click.stop="clear">clear</button>
    </li>
</template>

<script>
export default {
    name: 'cart-item',
    props: ['book'],
    methods: {
        add() {
            this.$emit('add');
        },
        substract() {
            this.$emit('substract');
        },
        clear() {
            this.$emit('clear');
        }
    }
}
</script>
