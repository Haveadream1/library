const form = document.querySelector('#form');

const bookSection = document.querySelector('.book-section');

const bookTitle = document.querySelector('#book-title');
const authorName = document.querySelector('#author-name');
const bookStatus = document.querySelector('#book-status');

let myLibrary = [];

class Book {
  constructor(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
  }
}

// Create a book object and push it to the library array
function createBook() {
  let newBook = new Book(bookTitle.value, authorName.value, bookStatus.value);
  myLibrary.push(newBook);
  console.log(myLibrary);

  const book = document.createElement('section');
  book.classList.add('book');
  bookSection.appendChild(book);

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = `Title: ${bookTitle.value}`;
  book.appendChild(title);

  const author = document.createElement('p');
  author.classList.add('author');
  author.textContent = `Author: ${authorName.value}`;
  book.appendChild(author);

  const bookButtonSection = document.createElement('section');
  bookButtonSection.classList.add('book-button-section');
  book.appendChild(bookButtonSection);

  const statusButton = document.createElement('button');
  statusButton.classList.add('status-button');
  statusButton.textContent = bookStatus.value;
  bookButtonSection.appendChild(statusButton);

  statusButton.addEventListener('click', () => {
    if (newBook.status === 'Reading') {
      newBook.status = 'Plan to read';
    } else {
      newBook.status = 'Reading';
    }
    statusButton.textContent = newBook.status;
    console.log(newBook);
  })

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'Delete';
  bookButtonSection.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    book.remove(); // Remove element from the DOM

    const index = myLibrary.indexOf(newBook);
    myLibrary.splice(index,1); // Remove element from the array
    console.log(myLibrary);
  })
}

// form client-side validation
const isRequired = (value) => {
  if (value === '') {
    return false;
  } else {
    return true;
  }
}

const showError = (input, message) => {
  const fieldset = input.parentElement;
  input.classList.add('error');
  input.classList.remove('success');

  const small = fieldset.querySelector('small');
  small.textContent = message;
}

const showSuccess = (input) => {
  const fieldset = input.parentElement;
  input.classList.add('success');
  input.classList.remove('error');

  const small = fieldset.querySelector('small');
  small.textContent = '';
}

const checkTitle = () => {
  let valid = false;
  const titleValue = bookTitle.value.trim();

  if (!isRequired(titleValue)) {
    showError(bookTitle, 'Title cannot be blank');
  } else {
    showSuccess(bookTitle);
    valid = true;
  }
  return valid;
}

const checkAuthor = () => {
  let valid = false;
  const authorValue = authorName.value.trim();

  if (!isRequired(authorValue)) {
    showError(authorName, 'Author cannot be blank');
  } else {
    showSuccess(authorName);
    valid = true;
  }
  return valid;
}

function setDefaultInputs() {
  const title = document.querySelector('#book-title');
  const author = document.querySelector('#author-name');

  title.value = '';
  title.classList.remove('success'); // Only remove success as error don't pass the form validity
  author.value = '';
  author.classList.remove('success');
}

// Used to prevent to sent data to backend
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isAuthorValid = checkAuthor(), 
  isTitleValid = checkTitle();

  let isFormValid = isAuthorValid && isTitleValid;
  
  if (isFormValid) {
    createBook();
    console.log('Valid form');
  } else {
    console.log('Invalid form');
  }
  setDefaultInputs()
});

form.addEventListener('input', (e) => {
  switch (e.target.id) {
    case 'book-title':
      checkTitle();
      break;
    case 'author-name':
      checkAuthor();
      break;
  }
})

/*
  Take user input
  Create a new object
  Store book object in the array
  Create a DOM book and display it
  Target the book object in array and change value
*/