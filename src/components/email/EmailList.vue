<template>
    <section>
        <h1>Email List </h1>
        <ul v-if="mails.length">
            <email-preview v-for="email in mails" @click.native="mailSelected(email)" :key="email.id" :email="email"> </email-preview>
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
    props: ['mails', 'selectedId'],
    methods: {
        mailSelected(email) {
            console.log('selected mail:', email)
            this.$emit('mailSelect', email);
        }
    }
}
</script>

<style lang="scss" scoped>
.selected-mail {
    color: white;
    background-color: lighten(#116CD6, 15%);
}
</style>
