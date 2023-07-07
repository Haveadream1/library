let container = document.querySelector(".second-section");
let myLibrary = [];

class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

function display() {
  let createDiv = document.createElement("div");
  createDiv.classList.add("book-div");
  container.appendChild(createDiv);

  if (myLibrary.length > 4 && myLibrary.length <= 8) {
    container.style.gridTemplateRows = '310px 310px';
    createDiv.style.gridRow = '2';
  } else if (myLibrary.length > 8) {
    // the condition is never fullfil
    console.log('ee')
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
  createDivAl.appendChild(createButtD);

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    createT.textContent = `Title: ${book.title}`;
    createA.textContent = `Author: ${book.author}`;
    createButtR.textContent = `${book.read}`;

    createButtD.addEventListener("click", () => {
      createDiv.remove();
      // here issue
      let index = myLibrary.indexOf(book);
      //console.log(index);
      myLibrary.splice(index, 1);
      console.log(myLibrary);
    });

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
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  read = document.getElementById("status").value;
  let newBook = new Book(title, author, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  display();
}

// Used to prevent to sent data to backend
let form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
});

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
