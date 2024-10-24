const myLibrary = [];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  read = false;
}

function addBookToMyLibrary() {
  let title = prompt('Please enter the title of the book');
  let author = prompt("Please enter the author's name");
  let pages = prompt('Please enter the number of pages of the book');
  myLibrary.push(new Book(title, author, pages));
}
function deleteBook(event) {
  let parent = event.target.parentElement;

  myLibrary.splice(parent.getAttribute('index'), 1);
  let indexDelete = Number(parent.getAttribute('index'));
  let toDelete = document.querySelector(`div[index='${indexDelete}'`);

  bookContainer.removeChild(toDelete);
  for (let i = indexDelete + 1; i < myLibrary.length + 1; i++) {
    let toAdjust = document.querySelector(`div[index='${i}'`);
    toAdjust.setAttribute('index', i - 1);
  }
}

function readButton(event) {
  let button = event.target;
  let parent = button.parentElement;

  button.classList.toggle('green');
  let indexBox = parent.getAttribute(`index`);
  myLibrary[indexBox].read = button.classList.contains('green') ? true : false;
}
function submitEvent(event) {
  event.preventDefault();

  let title = document.querySelector("form input[id='title'");

  let author = document.querySelector("form input[id='author'");

  let pages = document.querySelector("form input[id='pages'");

  myLibrary.push(new Book(title.value, author.value, pages.value));

  let a = document.createElement('div');
  a.classList.add('card');
  a.setAttribute('index', myLibrary.length - 1);
  let b = document.createElement('h1');
  b.textContent = title.value;
  c = document.createElement('h2');
  c.textContent = `By ${author.value}`;
  d = document.createElement('h3');
  d.textContent = pages.value + ' pages';
  bookContainer.appendChild(a);

  a.appendChild(b);
  a.appendChild(c);
  a.appendChild(d);
  let e = document.createElement('button');
  e.classList.add('delete');
  e.textContent = 'Delete';
  e.addEventListener('click', deleteBook);
  a.appendChild(e);
  let f = document.createElement('button');
  f.classList.add('read');
  f.textContent = 'Read';
  f.addEventListener('click', readButton);
  a.appendChild(f);
}

let a = new Book('Harry Potter', 'Hi', 10);
let b = new Book('The Tree', 'James', 9);
let c = new Book('Superman', 'Marsh', 50);
myLibrary.push(a, b, c);

const bookContainer = document.querySelector('.book-container');

myLibrary.forEach(function (book, index) {
  let a = document.createElement('div');
  a.classList.add('card');
  a.setAttribute('index', index);
  let b = document.createElement('h1');
  b.textContent = book.title;

  c = document.createElement('h2');
  c.textContent = `By ${book.author}`;
  d = document.createElement('h3');
  d.textContent = book.pages + ' pages';
  bookContainer.appendChild(a);

  a.appendChild(b);
  a.appendChild(c);
  a.appendChild(d);
  let e = document.createElement('button');
  e.classList.add('delete');
  e.textContent = 'Delete';
  a.appendChild(e);
  let f = document.createElement('button');
  f.classList.add('read');
  f.textContent = 'Read';
  f.addEventListener('click', readButton);
  a.appendChild(f);
});

const button = document.querySelector('.new-book-button');
const sidebar = document.querySelector('.sidebar');
const submit = document.querySelector('.sidebar button[type=submit]');
submit.addEventListener('click', submitEvent);
const deleteButtons = document.querySelectorAll('.delete');

button.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

deleteButtons.forEach(function (button) {
  button.addEventListener('click', deleteBook);
});
