
// Client Side State of the store
// Kind of caching...
let mails = [];

const getMails = () => {
  return new Promise(resolve => {
    // simple caching mechanism
    if (mails.length) {
      resolve(mails);
    }
    else {
      setTimeout(() => {
        mails = generateMails();
        resolve(mails);
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
function generateMails() {
  // console.log('Generating Mails!');
  const mails = ['Hello Eliran', 'Hello Guy', 'Hello Tamir', 'Hello Erez'];
  return mails.map(generateMail);
}

function generateMail(subject, i) {
  // console.log('Yes, I am generating!');
  return {
    id: i + 1,
    subject: `${subject}`,
    body: `Message is the best way to Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, praesentium, nobis repellat perspiciatis quidem ex voluptatem eaque magni hic. Reprehenderit architecto, inventore dolore dicta. Possimus praesentium est quaerat ducimus nam.`,
    isRead: (Math.random() > 0.5)? true : false
  }
}

export default {
  getMails,
  // getBookById,
  // deleteBook,
  // getNext,
  // saveBook
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
