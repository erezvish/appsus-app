<template>
    <section>
        <el-col :xs="12" :sm="10" :md="10" class="list">
            <h1>
                <i class="fa fa-list" aria-hidden="true"></i>&nbsp; Email List </h1>
            <ul v-if="mails.length">
                <email-preview v-for="email in mails" :class="{'selected-mail': email.id === selectedId}" @click.native="mailSelected(email)" @delete="deleteEmail(email)" :key="email.id" :email="email"> </email-preview>
            </ul>
        </el-col>
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
        },
        deleteEmail(email) {
            console.log('moving delete request up the ladder');
            this.$emit('delete', email);
            // emailService.deleteMail(this.email);
        }
    }
}
</script>

<style lang="scss" scoped>
.selected-mail {
    color: white;
    background-color: lighten(#116CD6, 15%);
}

h1 {
    padding: 0 15px;
}

ul {
    padding: 0 15px;
}
</style>
