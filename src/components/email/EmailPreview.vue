<template>
    <section>
        <div class="single-mail">
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
export default {
    name: 'email-preview',
    props: ['email']
}
</script>

<style lang="scss" scoped>
.single-mail {
    border-top: 1px solid darken(#F2F2F2, 10%);
    border-bottom: 1px solid darken(#F2F2F2, 10%);
}
.topic {
    display: flex;
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
}

</style>