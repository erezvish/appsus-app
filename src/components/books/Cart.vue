<template>
    <div class="cart-container" v-if="items">
        <ul class="cart">
            <div class="close" @click="closeMe">
                <span>&times;</span>
            </div>
            <cart-item v-for="item in items" :key="item.id" :book="item" @add="add(item)" @substract="substract(item)" @clear="clear(item)">
            </cart-item>
        </ul>
    </div>
</template>

<script>
import cartService from '@/services/cart.service.js'
import CartItem from './CartItem'
export default {
    name: 'cart',
    components: {
        CartItem
    },
    created() {
        this.items = cartService.getCartItems();
    },
    data() {
        return {
            items: null,
        }
    },
    methods: {
        closeMe() {
            this.$emit('closeCart');
        },
        add(item) {
            this.$emit('add', item);
        },
        substract(item) {
            this.$emit('substract', item);
        },
        clear(item) {
            this.$emit('clearItemFromCart', item);
        }
    }
}
</script>

