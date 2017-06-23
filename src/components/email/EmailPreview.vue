<template>
    <section>
        <div class="single-mail">
                <el-button type="danger" size="mini" @click.stop="deleteEmail"> x </el-button>
            <div class="topic">
                <i v-if="email.isRead" class="fa fa-envelope-open-o"></i>
                <i v-if="!email.isRead" class="fa fa-envelope-o"></i>
                <p class="preview-subject">
                    <span>subject:</span> {{email.subject}} </p>
            </div>
            <p class="preview-body">{{email.body}} </p>
        </div>
    </section>
</template>

<script>
import emailService from '../../services/email.service'
export default {
    name: 'email-preview',
    props: ['email'],
    methods: {
        deleteEmail() {
            console.log('requested to delete this email');
            emailService.deleteMail(this.email);
        }
    }
}
</script>

<style lang="scss" scoped>
.single-mail {
    cursor: pointer;
    border-top: 1px solid darken(#F2F2F2, 10%);
    border-bottom: 1px solid darken(#F2F2F2, 10%);
    transition: all, 0.7s;
    &:hover {
        background: #DFDFDF;
        
        transition: all, 0.7s;
    }
}
.single-mail {
    position: relative;
    button {
        position: absolute;
        right: 4px;
        top: 4px;
    }
}

.topic {
    // display: flex;
    span {
        font-weight: bold;
    }
    i,
    p {
        margin: 0;
        padding: 4px;
    }
    .fa {
       color : lightseagreen;
    }
}

.preview-body {
    text-align: left;
    margin: 4px 0;
    padding: 0 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

</style>