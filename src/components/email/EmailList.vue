<template>
    <section>
            <el-col :xs="12"  :sm="10" :md="10" class="list">
                <h1><i class="fa fa-list" aria-hidden="true"></i>&nbsp; Email List </h1>
                <ul v-if="mails.length">
                    <email-preview v-for="email in mails" :email="email"> </email-preview>
                </ul>
            </el-col >
       
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

// .list {
//     border: 1px solid #333;
// }

h1 {
    padding: 0 15px;
}
ul {
    padding: 0 15px;
}
</style>
