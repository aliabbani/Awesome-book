class Booklet {
  constructor(title, author, listShowContainer) {
    this.bookList = [];
    this.title = title;
    this.author = author;
    this.listShowContainer = listShowContainer;
  }

  removeBook = (index) => {
    this.bookList = this.bookList.filter((book, ind) => ind !== index);
  };

  addNewBook = (bookList) => {
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const book = {
      title,
      author,
    };
    this.bookList.push(book);
    this.saveDataLocally(bookList);
    this.generateBooks();
  };

  generateBooks = () => {
    this.listShowContainer = '';

    this.bookList.reverse().forEach((bookObject, index) => {
      const div = document.createElement('div');
      div.className = 'book';

      const titleSpan = document.createElement('span');
      titleSpan.className = 'book-title';
      titleSpan.textContent = bookObject.title;
      div.appendChild(titleSpan);

      const br = document.createElement('br');
      div.appendChild(br);

      const authorSpan = document.createElement('span');
      authorSpan.className = 'book-author';
      authorSpan.textContent = bookObject.author;
      div.appendChild(authorSpan);
      const br2 = document.createElement('br');
      div.appendChild(br2);

      const removeButton = document.createElement('button');
      removeButton.className = 'remove-button';
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(index);
        this.saveDataLocally(this.bookList);
        this.generateBooks();
      });
      div.appendChild(removeButton);

      const hr = document.createElement('hr');
      hr.className = 'rule';
      div.appendChild(hr);

      this.listShowContainer.appendChild(div);
    });
  };

  saveDataLocally = (bookList) => {
    const stringifiedBookList = JSON.stringify(bookList);
    localStorage.setItem('bookList', stringifiedBookList);
  };
}

// let bookList = [];

// const saveDataLocally = (bookList) => {
//   const stringifiedBookList = JSON.stringify(bookList);
//   localStorage.setItem('bookList', stringifiedBookList);
// };

// const removeBook = (index) => {
//   bookList = bookList.filter((book, ind) => ind !== index);
// };

// const listShowContainer = document.querySelector('.listShow');

// const generateBooks = () => {
//   listShowContainer.innerHTML = '';

//   bookList.reverse().forEach((bookObject, index) => {
//     const div = document.createElement('div');
//     div.className = 'book';

//     const titleSpan = document.createElement('span');
//     titleSpan.className = 'book-title';
//     titleSpan.textContent = bookObject.title;
//     div.appendChild(titleSpan);

//     const br = document.createElement('br');
//     div.appendChild(br);

//     const authorSpan = document.createElement('span');
//     authorSpan.className = 'book-author';
//     authorSpan.textContent = bookObject.author;
//     div.appendChild(authorSpan);
//     const br2 = document.createElement('br');
//     div.appendChild(br2);

//     const removeButton = document.createElement('button');
//     removeButton.className = 'remove-button';
//     removeButton.textContent = 'Remove';
//     removeButton.addEventListener('click', () => {
//       removeBook(index);
//       saveDataLocally(bookList);
//       generateBooks();
//     });
//     div.appendChild(removeButton);

//     const hr = document.createElement('hr');
//     hr.className = 'rule';
//     div.appendChild(hr);

//     listShowContainer.appendChild(div);
//   });
// };



if (localStorage.getItem('bookList') !== null) {
  const localBookList = localStorage.getItem('bookList');
  const convertedBookList = JSON.parse(localBookList);
  bookList = convertedBookList;
  generateBooks();
} else {
  generateBooks();
}

// const addNewBook = (bookList) => {
//   const title = document.querySelector('.title').value;
//   const author = document.querySelector('.author').value;
//   const book = {
//     title,
//     author,
//   };
//   bookList.push(book);
//   saveDataLocally(bookList);
//   generateBooks();
// };

const addButton = document.querySelector('.add');
addButton.addEventListener('click', () => addNewBook(bookList));
