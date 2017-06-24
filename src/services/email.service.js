
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

function getMailById(mailId) {
  return getMails().then(mails => {
    const mail = mails.find(mail => mailId === mail.id);
    return mail;
  });
}

function deleteMail(mail) {
  console.log('Deleting the mail', mail)
  var idx = mails.indexOf(mail)
  mails.splice(idx, 1);
}

function getNext(mail) {
  // select next in a cyclic way
  var idx = mails.indexOf(mail);
  return (idx < mail.length - 1) ?
    mails[idx + 1] : mails[0];
}

function saveMail(mail) {
  var idx = mails.findIndex(currMail => currMail.id === mail.id)
  if (idx > -1) {
    mails.splice(idx, 1, mail);
  } else {
    mails.push(mail);
  }
}

// Used to create local data with no AJAX
function generateMails() {
  // console.log('Generating Mails!');
  const mails = ['Hello Eliran', 'Hello Guy', 'Hello Tamir', 'Hello Erez', 'Hello Popo', 'Hello Shmopo', 'Hello Coco'];
  return mails.map(generateMail);
}

function generateMail(subject, i) {
  // console.log('Yes, I am generating!');
  return {
    id: i + 1,
    subject: `${subject}`,
    body: `Message is the best way to Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, praesentium, nobis repellat perspiciatis quidem ex voluptatem eaque magni hic. Reprehenderit architecto, inventore dolore dicta. Possimus praesentium est quaerat ducimus nam.`,
    isRead: (Math.random() > 0.5) ? true : false
  }
}

export default {
  getMails,
  getMailById,
  deleteMail,
  getNext,
  saveMail
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
