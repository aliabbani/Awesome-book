let bookList = [];

const saveDataLocally = (bookList) => {
  const stringifiedBookList = JSON.stringify(bookList);
  localStorage.setItem('bookList', stringifiedBookList);
};

const removeBook = (index) => {
  bookList = bookList.filter((book, ind) => ind !== index);
};

const listShowContainer = document.querySelector('.listShow');

const generateBooks = () => {
  listShowContainer.innerHTML = '';

  bookList.reverse().forEach((bookObject, index) => {
    const div = document.createElement('div');
    div.className = 'book';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'book-title';
    titleSpan.textContent = `"${bookObject.title}" by ${bookObject.author}`;
    div.appendChild(titleSpan);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBook(index);
      saveDataLocally(bookList);
      generateBooks();
    });
    div.appendChild(removeButton);

    

    listShowContainer.appendChild(div);
    if (index % 2 === 0) {
      div.classList.add('grey-background');
    }
  });
};

if (localStorage.getItem('bookList') !== null) {
  const localBookList = localStorage.getItem('bookList');
  const convertedBookList = JSON.parse(localBookList);
  bookList = convertedBookList;
  generateBooks();
} else {
  generateBooks();
}

const addNewBook = (bookList) => {
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const book = {
    title,
    author,
  };
  bookList.push(book);
  saveDataLocally(bookList);
  generateBooks();
};

const addButton = document.querySelector('.add');
addButton.addEventListener('click', () => addNewBook(bookList));
