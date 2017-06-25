<template>
    <div class="cart" v-if="items">
        <ul class="cart-list">
            <div class="close">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                Cart
                <span @click="closeMe">&times;</span>
                
            </div>
            <cart-item v-for="item in items" :key="item.id" :book="item" @add="add(item)" @substract="substract(item)" @clear="clear(item)">
            </cart-item>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');

    .cart {
        display: flex;
        justify-content: space-around;
        background: white;
        position: absolute;
        padding: 1em;
        left: 0;
        top: 6.7em;
        background: white;
        border: 1px solid rgb(52, 62, 82);
        
    }

    .cart-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .close {
        flex-basis:1;
        font: {
            size: 3em;
            family: 'Fjalla One', sans-serif;
        };
       
        transition: all, 0.2s;
        &:hover {
            color: red;
            transition: all, 0.2s;
        }

        & span {
             cursor: pointer;
        }
    }

    .close {
        display: flex;
        justify-content: space-between;
    }
</style>

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

