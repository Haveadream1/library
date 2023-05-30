let myLibrary = [];

function Book(title, author, read) {
      this.title = title;
      this.author = author;
      this.read = read;
};

function display() {
    let value = 0;
    let container = document.querySelector('.second-section');

    for(let i = 0; i < myLibrary.length; i++) {
        value += 1; 
        let book = myLibrary[i];

        let createDiv = document.createElement('div');
        createDiv.classList.add('book-div');
        // every time new objects grid +1 if > 3 row +1
        createDiv.style.gridColumn = value;
        container.appendChild(createDiv);

        let createT = document.createElement('p');
        createT.classList.add('title-book');
        createT.textContent = `Title: ${book.title}`;
        createDiv.appendChild(createT);

        let createA = document.createElement('p');
        createA.classList.add('author-book');
        createA.textContent = `Title: ${book.author}`;
        createDiv.appendChild(createA);

        let createDivAl = document.createElement('div');
        createDivAl.classList.add('align-button');
        createDiv.appendChild(createDivAl);

        let createButtR = document.createElement('button');
        createButtR.classList.add('button-read');
        createButtR.textContent = `Title: ${book.read}`;
        createDivAl.appendChild(createButtR);

        let createButtD = document.createElement('button');
        createButtD.classList.add('button-delete');
        createButtD.textContent = 'Delete';
        createDivAl.appendChild(createButtD);
    } 
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let read = document.getElementById('status').value;
    let newBook = new Book(title, author, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    display();
}
let addButton = document.querySelector('.button-add');


let form = document.querySelector('#form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
});


let setTitle = document.querySelector('.title-book');
setTitle.textContent = `Title: ${newBook.title}`;
let setAuthor = document.querySelector('.author-book');
setAuthor.textContent = `Author: ${newBook.author}`;
let setStatus = document.querySelector('.button-read');
setStatus.textContent = `${newBook.read}`;


let readButton = document.querySelector('.button-read');
function setReadButton() {

}
readButton.addEventListener('click', setReadButton);

let divFirst = document.querySelector('.book-div');
let deleteButton = document.querySelector('.button-delete');
function setDeleteButton() {
    setTitle.remove();
    setAuthor.remove();
    setStatus.remove();
    readButton.remove();
    deleteButton.remove();
    divFirst.remove();
}
deleteButton.addEventListener('click', setDeleteButton);

/*  Book objects need to be stored in the array
    Take user input and store the new book objects
    into the array
    function that loops through the array and displays 
    each book
    

    Take value from input, store it in an object or array
    when button is pressed display the book
    store the book in an array to keep value of it

    button create an nex object zith the value
*/