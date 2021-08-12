const listNav = document.querySelector('.list');
const addNewNav = document.querySelector('.add-new');
const contactNav = document.querySelector('.contact');

const allBooks = document.querySelector('.all-books');
const addBooks = document.querySelector('.add-books');
const contactBox = document.querySelector('.contact-info');

listNav.addEventListener('click', () => {
  addBooks.style.display = 'none';
  contactBox.style.display = 'none';
  allBooks.style.display = 'block';
});

addNewNav.addEventListener('click', () => {
  allBooks.style.display = 'none';
  contactBox.style.display = 'none';
  addBooks.style.display = 'flex';
});

contactNav.addEventListener('click', () => {
  addBooks.style.display = 'none';
  allBooks.style.display = 'none';
  contactBox.style.display = 'flex';
});
