<template>
    <li class="cart-item">
        <div class="details">
            
            <h2>Title: {{book.title}}</h2>
            <h3>Price: ${{book.price}}</h3>
        </div>

        <div class="ctrl">
            <el-button type="default" @click.stop="add">+</el-button>
            <span>{{book.quantity}}</span>
            <el-button type="default" @click.stop="substract">-</el-button>
            <el-button type="danger" @click.stop="clear">clear</el-button>
        </div>
    </li>
</template>


<style lang="scss" scoped>

.cart-item {
    border-top: 1px solid rgba(0,0,0,0.2);
    padding: 1em;
}

</style>

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
