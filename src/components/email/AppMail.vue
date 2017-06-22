<template>
    <section>
        <img src="../../assets/img/app-mail-logo.png">
        <div class="placeholder"></div>
        <email-list :mails="mails"> </email-list>
        <email-details :selectedMail="selectedMail"></email-details>
    </section>
</template>

<script>
import EmailList from './EmailList'
import EmailDetails from './EmailDetails'
export default {
    name: 'app-mail',
    components: {
        EmailList,
        EmailDetails
    },
    data() {
        return {
            mails: [
                {
                    subject: 'Hello Eliran',
                    body: 'Hello Eliran, what are you doing? be nice',
                    isRead: false
                },
                {
                    subject: 'Hello Guy',
                    body: 'Hello Guy, where is Eliran? Can you help him? where is bella?',
                    isRead: true
                }
            ],
            selectedMail: {
                subject: 'test mail',
                body: 'bla bla bla bla',
                isRead: true
            } //TODO: change the placeholder
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
