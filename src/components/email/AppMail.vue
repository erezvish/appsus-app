<template>
    <section>
        <img src="../../assets/img/app-mail-logo.png">
        <div class="placeholder"></div>
        <email-list :mails="mails" :selectedId="selectedMail.id" @mailSelect="mailSelected"> </email-list>
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
                    id: 1,
                    subject: 'Hello Eliran',
                    body: 'Hello Eliran, what are you doing? be nice',
                    isRead: false
                },
                {
                    id: 2,
                    subject: 'Hello Guy',
                    body: 'Hello Guy, where is Eliran? Can you help him? where is bella?',
                    isRead: true
                },
                {
                    id: 3,
                    subject: 'Hello Tamir',
                    body: 'Yo Tamir, what is up? Did you complete the design yet?',
                    isRead: true
                },
                {
                    id: 4,
                    subject: 'test mail',
                    body: 'bla bla bla bla',
                    isRead: true
                }
            ],
            selectedMail: {
                id: 4,
                subject: 'test mail',
                body: 'bla bla bla bla',
                isRead: true
            } //TODO: change the placeholder
        }
    },
    methods: {
        mailSelected(email) {
            console.log('Received mail to select:', email)
            this.selectedMail = email;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
