<template>
  <section class="book-list" v-if="books">
    <img src="../../assets/img/ninja-books.png" />
  
    <cart v-if="isCartShown" @closeCart="closeCart" @add="addToCart" @substract="substractFromCart" @clearItemFromCart="clearItemFromCart">
    </cart>
  
    <h2> {{books.length}} Books available!</h2>
    <el-button @click="isCreateMode=true" type="primary">
      <i class="fa fa-file-text-o" aria-hidden="true"></i>Add new book</el-button>
    <book-filter @set-filter="setFilter"></book-filter>
  
    <book-edit v-if="editedBook || isCreateMode" :book="editedBook" @save="saveBook" @cancelEdit="cancelEdit">
    </book-edit>
    <ul>
      <book-preview v-for="currBook in booksToDisplay" :key="currBook.id" @click.native="selectBook(currBook)" @edit="editBook(currBook)" @delete="deleteBook(currBook)" @addToCart="addToCart(currBook)" @substractFromCart="substractFromCart(currBook)" :book="currBook">
      </book-preview>
    </ul>
    <book-details v-if="selectedBook" @close="resetSelected" @next="selectNext" :book="selectedBook">
    </book-details>
  
  </section>
</template>

<script>
import bookService from '@/services/book.service.js'
import cartService from '@/services/cart.service.js'
import BookPreview from './BookPreview'
import BookDetails from './BookDetails'
import BookFilter from './BookFilter'
import BookEdit from './BookEdit'
import Cart from './Cart'

export default {
  name: 'book-list',
  created() {
    bookService.getBooks().then(books => this.books = books)
  },
  components: {
    BookPreview,
    BookDetails,
    BookFilter,
    BookEdit,
    Cart
  },
  data() {
    return {
      books: null,
      selectedBook: null,
      editedBook: null,
      isCreateMode: false,
      isCartShown: false,
      filter: ''
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
    booksToDisplay() {
      var books = this.books;
      if (this.filter) {
          books = this.books.filter(book => book.title.toLowerCase().includes(this.filter.toLowerCase()));
      }
      return books;
    }
  },
  methods: {
    selectBook(book) {
      this.selectedBook = book;
    },
    resetSelected() {
      this.selectedBook = null;
    },
    selectNext() {
      this.selectedBook = bookService.getNext(this.selectedBook)
    },
    editBook(book) {
      this.editedBook = book
    },
    cancelEdit() {
      this.editedBook = null
      this.isCreateMode = false
    },
    saveBook(book) {
      bookService.saveBook(book)
      this.editedBook = null
      this.isCreateMode = false
    },
    deleteBook(book) {
      bookService.deleteBook(book)
    },
    addToCart(book) {
      cartService.addToCart(book)
      this.isCartShown = true
    },
    substractFromCart(book) {
      cartService.substractFromCart(book.id)
      console.log('sent')
    },
    clearItemFromCart(book) {
      cartService.clearItem(book)
    },
    closeCart() {
      this.isCartShown = false
    },
    setFilter(filter) {
      this.filter = filter
    }
  },
}
</script>

<style lang="scss" scoped>
.book-list {
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(203, 235, 245, 0.4);
}

section img {
  max-width: 200px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.fa {
  font-size: 1.5em;
  margin-right: 0.5em;
}
</style>
