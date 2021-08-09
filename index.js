const bookList = [
  {
    title: 'Nature',
    author: 'Ali',
  },
  {
    title: 'The Earth',
    author: 'Henry',
  },
];

const addNewBook = () => {
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const book = {
    title,
    author,
  };
  bookList.push(book);
};
