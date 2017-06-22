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
                    <email-list :mails="mails"> </email-list>
                    <email-details @delete="deleteMsg()" :selectedMail="selectedMail"></email-details>
    
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
import ComposeMail from './ComposeMail'
import EmailStatus from './EmailStatus'

export default {
    name: 'app-mail',
    components: {
        EmailList,
        EmailDetails,
        ComposeMail,
        EmailStatus
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
    methods: {
        deleteMsg() {
            console.log('ask for delete msg')
        },
        createNewMail() {
            console.log('ready to create new mail here...')
        },
        createNewMail() {
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
}
</style>
