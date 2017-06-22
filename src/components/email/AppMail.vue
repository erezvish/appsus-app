<template>
    <section>
        <div class="app-mail">
            <email-list :mails="mails"> </email-list>
            <!--<email-details></email-details>-->
        </div>
    
    </section>
</template>

<script>
import EmailList from './EmailList'
export default {
    name: 'app-mail',
    components: {
        EmailList
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
                },
                {
                    subject: 'Hello Tamir',
                    body: 'Yo, what is up? Are you going to get our design finished soon?',
                    isRead: true
                }
            ],
            selectedMail: null //TODO: change the placeholder
        }
    },
}
</script>

<style lang="scss" scoped>
    .app-mail {
        display: flex;
    }
</style>
