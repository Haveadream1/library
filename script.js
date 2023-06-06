let myLibrary = [];

class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
};
 
function display() {
    let valueGridColumn = 0;
    let valueGridRow = 2;
    let container = document.querySelector('.second-section');
    for(let i = 0; i < myLibrary.length; i++) { 
        if(valueGridColumn <= 3) {
            valueGridColumn += 1;
        } else if(valueGridColumn > 3) {
            valueGridColumn = 0;
            valueGridColumn += 1;
            container.style.gridTemplateRows = '90px 310px 310px';
            valueGridRow = 3;
        }
        let book = myLibrary[i];

        let createDiv = document.createElement('div');
        createDiv.classList.add('book-div');
        createDiv.style.gridColumn = valueGridColumn;
        createDiv.style.gridRow = valueGridRow;
        container.appendChild(createDiv);

        let createT = document.createElement('p');
        createT.classList.add('title-book');
        createT.textContent = `Title: ${book.title}`;
        createDiv.appendChild(createT);

        let createA = document.createElement('p');
        createA.classList.add('author-book');
        createA.textContent = `Author: ${book.author}`;
        createDiv.appendChild(createA);

        let createDivAl = document.createElement('div');
        createDivAl.classList.add('align-button');
        createDiv.appendChild(createDivAl);

        let createButtR = document.createElement('button');
        createButtR.classList.add('button-read');
        createButtR.textContent = `${book.read}`;
        createButtR.addEventListener('click', function() {
            if(book.read === 'Read') {
                book.read = 'Not Read';
                createButtR.textContent = `${book.read}`;
            } else {
                book.read = 'Read';
                createButtR.textContent = `${book.read}`;
            }
        });
        createDivAl.appendChild(createButtR);
        // take off the right object but need to click several times on the same butt
        // i need the same number of click as the index dafuck
        let createButtD = document.createElement('button');
        createButtD.classList.add('button-delete');
        createButtD.textContent = 'Delete';
        createButtD.addEventListener('click', function(e) {
            //createButtD.parentElement.parentElement.remove();
            // e.test.remove();
            e.createButtD.parentElement.remove();
            let index = myLibrary.indexOf(book);
            myLibrary.splice(index,1);
            console.log(myLibrary);
            console.log(index)
        });
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