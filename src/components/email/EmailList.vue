<template>
    <section>
        <h1>Email List </h1>
        <ul v-if="mails.length">
            <email-preview v-for="email in mails" :email="email"> </email-preview>
        </ul>
    </section>
</template>

<script>
import EmailPreview from './EmailPreview'
export default {
    name: 'email-list',
    components: {
        EmailPreview
    },
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
