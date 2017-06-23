<template>
  <section v-if="books">
    <book-filter @filterSet="setFilter">
    </book-filter>
    <cart v-if="isCartShown" @closeCart="closeCart" @add="addToCart" @substract="substractFromCart" @clearItemFromCart="clearItemFromCart">
    </cart>

    <h2>We have {{books.length}} Books</h2>
    <button @click="isCreateMode=true">+</button>
    <ul>
      <book-preview v-for="currBook in booksToDisplay" :key="currBook.id" @click.native="selectBook(currBook)" @edit="editBook(currBook)" @delete="deleteBook(currBook)" @addToCart="addToCart(currBook)" @substractFromCart="substractFromCart(currBook)" :book="currBook">
      </book-preview>
    </ul>
    <book-details v-if="selectedBook" @close="resetSelected" @next="selectNext" :book="selectedBook">
    </book-details>

    <book-edit v-if="editedBook || isCreateMode" :book="editedBook" @save="saveBook" @cancelEdit="cancelEdit">
    </book-edit>
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
      filter: {}
    }
  },
  computed: {
    // TODO:    support sort by title and price together
    //          change it to native vue filter
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
