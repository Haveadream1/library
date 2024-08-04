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


let x = -1;

/*
const createBook = () => {
  x++;

  let createDiv = document.createElement("div");
  createDiv.classList.add("book-div");
  bookSection.appendChild(createDiv);

  if (myLibrary.length > 4 && myLibrary.length <= 8) {
    bookSection.style.gridTemplateRows = '310px 310px';
    createDiv.style.gridRow = '2';
  } else if (myLibrary.length > 8) {
    container.style.gridTemplateRows = '310px 310px 310px';
    createDiv.style.gridRow = '3';
  }

  let createT = document.createElement("p");
  createT.classList.add("title-book");
  createDiv.appendChild(createT);

  let createA = document.createElement("p");
  createA.classList.add("author-book");
  createDiv.appendChild(createA);

  let createDivAl = document.createElement("div");
  createDivAl.classList.add("align-button");
  createDiv.appendChild(createDivAl);

  let createButtR = document.createElement("button");
  createButtR.classList.add("button-read");
  createDivAl.appendChild(createButtR);

  let createButtD = document.createElement("button");
  createButtD.classList.add("button-delete");
  createButtD.textContent = "Delete";
  createButtD.dataset.id = x;
  createDivAl.appendChild(createButtD);

  createButtD.addEventListener("click", () => {
    createDiv.remove();
    // take the right object with the index set before with data set
    index = createButtD.dataset.id;
    console.log(index);
    myLibrary.splice(index,1);
    console.log(myLibrary)
    x--;
  });

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    createT.textContent = `Title: ${book.title}`;
    createA.textContent = `Author: ${book.author}`;
    createButtR.textContent = `${book.read}`;

    createButtR.addEventListener("click", () => {
      if (book.read === "Read") {
        book.read = "Not Read";
        createButtR.textContent = `${book.read}`;
      } else {
        book.read = "Read";
        createButtR.textContent = `${book.read}`;
      } 
    });
  }
}
*/
/*
const addBookToLibrary = () => {
  const title =  bookTitle.value;
  const author = authorName.value;
  const status = bookStatus.value;

  let newBook = new Book(title, author, status);

  myLibrary.push(newBook);
  console.log(myLibrary);
}
*/
const createBook = () => {

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
    book.remove();
    newBook.remove()
    console.log(myLibrary)
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
