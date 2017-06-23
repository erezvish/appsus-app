<template>
    <div>
        <h1>I am a FILTER!!!</h1>
    </div>
</template>

<script>
export default {
    name: 'book-filter',
    created() {
        this.$emit('filterSet', { byTitle: '', minPrice: null });
    }
}
</script>
