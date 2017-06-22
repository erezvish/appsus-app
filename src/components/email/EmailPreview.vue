<template>
    <section>
        <div>
            <div>
                <i class="fa fa-envelope-o"></i>
                <p class="preview-subject">subject: {{email.subject}} </p>
            </div>
            <p class="preview-body">subject: {{email.body}} </p>
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

</style>
