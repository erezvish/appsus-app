<template>
    <section>
        <h1>Email List </h1>
        <button @click.stop="printMails()">print </button>
    </section>
</template>

<script>
export default {
    name: 'email-list',
    props: ['mails'],
    methods: {
        printMails() {
            console.log(this.mails)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
