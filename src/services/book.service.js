
// Client Side State of the store
// Kind of caching...
let books = [];

const getBooks = () => {
  return new Promise(resolve => {
    // simple caching mechanism
    if (books.length) {
      resolve(books);
    }
    else {
      setTimeout(() => {
        books = generateBooks();
        resolve(books);
      }, 500);
    }
  });
}

function getBookById(bookId) {
  return getBooks().then(books => {
    const book = books.find(book => bookId === book.id);
    return book;
  });
}

function deleteBook(book) {
  console.log('Deleting the book', book)
  var idx = books.indexOf(book)
  books.splice(idx, 1);
}

function getNext(book) {
    // select next in a cyclic way
    var idx = books.indexOf(book);
    return (idx < books.length-1)?
          books[idx+1] : books[0];
}

function saveBook(book) {
  var idx = books.findIndex(currBook => currBook.id === book.id)
  if (idx > -1) {
    books.splice(idx, 1, book);
  } else {
    books.push(book);
  }
}

// Used to create local data with no AJAX
function generateBooks() {
  const books = ['Harry Potter', 'Lord of the rings', 'Game of thrones'];
  return books.map(generateBook);
}

function generateBook(skill, i) {
  return {
    id: i + 1,
    title: `${skill}`,
    description: `${skill} is the best way to Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, praesentium, nobis repellat perspiciatis quidem ex voluptatem eaque magni hic. Reprehenderit architecto, inventore dolore dicta. Possimus praesentium est quaerat ducimus nam.`,
    price: (i + 1) * 10,
    quantity: 0
  }
}

export default {
  getBooks,
  getBookById,
  deleteBook,
  getNext,
  saveBook
}
// function getProductsFromGenericAPI() {
//   const params = {
//     rows:       10,
//     id:        '{index}',
//     price:     '{number|1000}',
//     title: '{lorem|2}',
//     description: '{lorem|10}',
//     pretty: true
//   }

//   return $.getJSON('http://www.filltext.com', params);

// }
