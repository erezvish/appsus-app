<template>
    <section>
    </section>
</template>

<script>
export default {
    name: 'map-marker',
    props: ['marker'],
    methods: {
        deleteMarker() {
            console.log('requested to delete this email');
            this.$emit('delete');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>