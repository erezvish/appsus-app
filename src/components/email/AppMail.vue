<template>
    <section>
        <img src="../../assets/img/app-mail-logo.png">
        <div class="placeholder"></div>
        <email-filter @set-filter="filterMails"></email-filter>
        <email-list :mails="mails" :selectedId="selectedMailId" @mailSelect="mailSelected"> </email-list>
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
                selectedMail: null
            }
        },
        computed: {
            selectedMailId() {
                return (this.selectedMail) ? this.selectedMail.id : 1;
            },
            booksToDisplay() {
                var books = this.books;

                if (this.filter) {
                    if (this.filter.byTitle) {
                    console.log('sorting by title:');
                } else if (this.filter.minPrice) {
          console.log('sorting by price:........');
          books =  this.books.filter(book => book.price >= this.filter.minPrice);
        }
      }
      return books;
    }
        },
        methods: {
            mailSelected(email) {
                console.log('Received mail to select:', email)
                this.selectedMail = email;
            },
            filterMails(filter) {
                console.log('got filter:', filter);
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>