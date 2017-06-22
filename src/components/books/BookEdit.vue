<template>
<section class="popup book-edit">
            <h1 v-if="book">Edit: {{book.title}}</h1>
            <h1 v-else>New Book</h1>
            <input type="text" placeholder="title" autofocus v-model="bookToEdit.title"/>
            <input type="number" min="0" placeholder="price" v-model="bookToEdit.price"/>
            <input type="text" placeholder="description" v-model="bookToEdit.description"/>
            <button @click="save">Save</button>
            <button @click="cancel">Cancel</button>
        </section>  
</template>

<<script>
export default {
  name: 'book-edit',
    created(){
        this.bookToEdit = Object.assign({}, this.book)
    },
    props: ['book'],
    data(){
        return {
            bookToEdit: null
        }
    },
    methods: {
        save() {
            this.$emit('save', this.bookToEdit)
        },
        cancel() {
            this.bookToEdit = null
            this.$emit('cancelEdit')
        }
    }
}
</script>

