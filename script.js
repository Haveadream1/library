let container = document.querySelector(".second-section");
let titleEL = document.getElementById("title");
let authorEl = document.getElementById("author");
let readEl = document.getElementById("status");
let x = -1;
let myLibrary = [];

class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

function display() {
  x++;

  let createDiv = document.createElement("div");
  createDiv.classList.add("book-div");
  container.appendChild(createDiv);

  if (myLibrary.length > 4 && myLibrary.length <= 8) {
    container.style.gridTemplateRows = '310px 310px';
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

function addBookToLibrary() {
  const title =  titleEL.value;
  const author = authorEl.value;
  const read = readEl.value;
  let newBook = new Book(title, author, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  display();
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
  const titleValue = titleEL.value.trim();
  if (!isRequired(titleValue)) {
    showError(titleEL, 'Title cannot be blank');
  } else {
    showSuccess(titleEL)
  }
}

const checkTAuthor = () => {
  const authorValue = authorEl.value.trim();
  if (!isRequired(authorValue)) {
    showError(authorEl, 'Author cannot be blank');
  } else {
    showSuccess(authorEl)
  }
}

// Used to prevent to sent data to backend
let form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();

  let isAuthorValid = checkTAuthor(), 
  isTitleValid = checkTitle();

  let isFormValid = isAuthorValid && isTitleValid;
  
  // to submit the data to the server if valid but don't work, as i don't saw that
  if (isFormValid) {
    //
  }
});

form.addEventListener('input', (e) => {
  switch (e.target.id) {
    case 'title' :
      checkTitle();
      break;
    case 'author' :
      checkTAuthor();
      break;
  }
})


/*  Book objects need to be stored in the array
    Take user input and store the new book objects
    into the array
    function that loops through the array and displays 
    each book
    

    Take value from input, store it in an object or array
    when button is pressed display the book
    store the book in an array to keep value of it
    button create an new object with the value
*/