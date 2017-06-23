<template>
    <section>
        <img src="../../assets/img/app-mail-logo.png">
        <div class="placeholder"></div>
        <email-filter @set-filter="setFilter"></email-filter>
        <email-list :mails="mailsToDisplay" :selectedId="selectedMailId" @mailSelect="mailSelected"> </email-list>
        <email-details v-if="selectedMail" :selectedMail="selectedMail"></email-details>
    </section>
</template>

<script>
    import EmailList from './EmailList'
    import EmailDetails from './EmailDetails'
    import EmailFilter from './EmailFilter'
    import emailService from '../../services/email.service'
    export default {
        name: 'app-mail',
        components: {
            EmailList,
            EmailDetails,
            EmailFilter
        },
        created() {
            emailService.getMails().then(mails => this.mails = mails)
            const mailsNum = this.mails.length;
            (mailsNum) ? this.mails[0] : null;
        },
        data() {
            return {
                mails: [],
                selectedMail: null,
                filter: {}
            }
        },
        computed: {
            selectedMailId() {
                return (this.selectedMail) ? this.selectedMail.id : 1;
            },
            mailsToDisplay() {
                var mails = this.mails;
                if (this.filter) {
                    let filterStatus = this.filter.emailStatus;
                    switch (filterStatus) {
                        case 'all':
                            mails = this.mails.filter(mail => 
                            mail.subject.includes(this.filter.txt) || mail.body.includes(this.filter.txt));     
                        break;
                        case 'read':
                            mails = this.mails.filter(mail => 
                             mail.isRead && (mail.subject.includes(this.filter.txt) || mail.body.includes(this.filter.txt)));    
                        break;
                        case 'unread':
                            mails = this.mails.filter(mail => 
                             !mail.isRead && (mail.subject.includes(this.filter.txt) || mail.body.includes(this.filter.txt)));    
                        break;
                    }    
                }
                return mails;
            }
        }, 
        methods: {
            mailSelected(email) {
                console.log('Received mail to select:', email)
                this.selectedMail = email;
                },
            setFilter(filter) {
                console.log('got filter:', filter);
                this.filter = filter;
                }
            }
        }

</script>

<style lang="scss" scoped>

</style>