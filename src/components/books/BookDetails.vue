<template>
  <div class="cover">
    <transition name="el-fade-in-linear">
      <section v-if="bookToShow" class="book-details">
        <div class="img-and-small-details">
          <h1>{{bookToShow.title}}</h1>
          <img src="http://via.placeholder.com/250x150">
          <h3>${{bookToShow.price}}</h3>
          <button class="next-book-details" @click="requestNextBook"> &rarr; </button>
        </div>
        <p class="book-description">{{bookToShow.description}}</p>
        <div @click="closeMe" class="close">
          <span>&times;</span>
        </div>
  
      </section>
    </transition>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.cover {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.book-details {
  max-width: 700px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  font-size: 1.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 1em;
}

.img-and-small-details {
  margin-right: 1em;
  position: relative;
  height: 100%;
}

.book-description::first-letter {
  font-size: 3em;
}

.close {
  /*color: white;*/
  /*position: absolute;*/
  top: 0;
  right: 0;
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  align-self: flex-start;
}

.close span {
  font-size: 2em;
  transition: all 0.5s;
}

.close span:hover {
  /*font-size: 2.5em;*/
  color: #aaa;
  transition: all 0.3s;
  /*font-weight: 900;*/
}

.close span:active {
  font-size: 3.5em;
  font-weight: 900;
}

button {
  font-size: 1em;
}

.next-book-details {
  font-family: cursive;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>

<script>
import bookService from '@/services/book.service.js'

export default {
  name: 'book-details',
  props: ['book'],
  data() {
    return {
      show: false,
      bookToShow: null,
      isModalMode: this.book !== undefined
    }
  },
  created() {
    const bookId = +this.$route.params.bookId;
    if (bookId) {
      this.getBook(bookId);
    } else {
      this.bookToShow = this.book;
    }
  },
  methods: {
    closeMe() {
      if (this.isModalMode) this.$emit('close');
      else this.$router.push('/');
    },
    requestNextBook() {
      console.log('Requesting Next');
      if (this.isModalMode) this.$emit('next');
      else {
        this.bookToShow = bookService.getNext(this.bookToShow)
        this.$router.push(`/book/${this.bookToShow.id}`);
      }
    },
    getBook(bookId) {
      bookService.getBookById(bookId)
        .then(book => {
          this.bookToShow = book;
          console.log(book)
        })
    },
    foo() {
      console.log('foo');
    }
  }
}
</script>
