<template>
    <section class="app-mail container">
        <el-row>
            <el-col :xs="24">
                <div class="img">
                    <img src="../../assets/img/app-mail-logo.png">
                </div>
                <!--<div class="placeholder"></div>-->
                <div class="main-content">
                    <compose-mail @compose-mail="createNewMail()"></compose-mail>
                    <email-filter @set-filter="setFilter"></email-filter>
                    <email-list :mails="mailsToDisplay" :selectedId="selectedMailId" @mailSelect="mailSelected"> </email-list>
                    <email-details v-if="selectedMail" @delete="deleteMsg()" :selectedMail="selectedMail"></email-details>
    
                </div>
    
            </el-col>
        </el-row>
    
        <el-row>
            <el-col :xs="24">
                <email-status @compose-mail="showStatus()"></email-status>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import EmailList from './EmailList'
    import EmailDetails from './EmailDetails'
    import EmailFilter from './EmailFilter'
    import emailService from '../../services/email.service'
    import ComposeMail from './ComposeMail'
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
                },
            deleteMsg() {
            console.log('ask for delete msg')
        },
        createNewMail() {
            console.log('ready to create new mail here...')
        },
        creatStatus() {
            console.log('ready for status update...')
        }
            }
        }
</script>

<style lang="scss" scoped>
.img {
    display: flex;
    justify-content: center;
    & img {
        max-width: 400px;
        max-height: 200px;
    }
</style>
