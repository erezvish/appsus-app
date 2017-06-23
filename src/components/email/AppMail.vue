<template>
    <section class="app-mail container">
        <el-row>
            <el-col :xs="24">
                <div class="img">
                    <img src="../../assets/img/app-mail-logo.png">
                </div>
                <div class="main-content">
                    <compose-mail @compose-mail="createNewMail"></compose-mail>
                    <email-filter @set-filter="setFilter"></email-filter>
                    <email-list :mails="mailsToDisplay" :selectedId="selectedMailId" @mailSelect="mailSelected"> </email-list>
                    <email-details v-if="selectedMail" @delete="deleteMsg(selectedMail)" :selectedMail="selectedMail"></email-details>
    
                </div>
    
            </el-col>
        </el-row>
    
        <el-row>
            <el-col :xs="24">
                <email-status :progress="readMailsPerc"></email-status>
            </el-col>
        </el-row>
    </section>
</template>

<script>
import ComposeMail from './ComposeMail'
import EmailList from './EmailList'
import EmailDetails from './EmailDetails'
import EmailFilter from './EmailFilter'
import emailService from '../../services/email.service'
import EmailStatus from './EmailStatus'
export default {
    name: 'app-mail',
    components: {
        EmailList,
        EmailDetails,
        EmailFilter,
        ComposeMail,
        EmailStatus
    },
    created() {
        emailService.getMails().then(mails => {
            this.mails = mails
            const mailsNum = this.mails.length;
            this.selectedMail = (mailsNum) ? this.mails[0] : null;
        })
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
            console.log('selecting', selectedMailId);
        },
        readMailsPerc() {
            var totalMails = this.mails.length;
            console.log(totalMails)
            var readMails = 0;
            this.mails.forEach(function (mail) {
                if (mail.isRead) readMails++;
            });
            return (totalMails > 0) ? parseInt(readMails / totalMails * 100) : 0;
        },
        mailsToDisplay() {
            let mails = this.mails;
            if (this.filter) {
                let filterStatus = this.filter.emailStatus;
                switch (filterStatus) {
                    case 'all': //TODO: refactor it. It's the same code.
                        //For some reason pulling the repeating filter outside didn't work
                        mails = this.mails.filter(mail =>
                            mail.subject.toLowerCase().includes(this.filter.txt.toLowerCase()) || mail.body.toLowerCase().includes(this.filter.txt.toLowerCase()));
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
            //console.log('got filter:', filter);
            this.filter = filter;
        },
        deleteMsg(email) {
            console.log('ask for delete msg received')
            if (email.id === this.selectedMail.id) var currSelectedFlag = true;
            emailService.deleteMail(email);
            if (currSelectedFlag) this.selectedMail = this.mails[0] || null;   
        },
        createNewMail() {
            console.log('ready to create new mail here...')
        },
    }
}
</script>

<style lang="scss" scoped>
.img {
    display: flex;
    justify-content: center;
    &img {
        max-width: 400px;
        max-height: 200px;
    }
}
</style>
