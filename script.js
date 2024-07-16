
const form = document.querySelector('form');
const tableBody = document.querySelector('tbody');
// const submit = document.querySelector('button');

let library = [];

const book1 = new Book('monk sold ferrari', 'some monk', 123, 'No');
library.push(book1);
addBookToTable(book1);

const book2 = new Book('Rich poor dads', 'someones son', 321, 'No');
library.push(book2);
addBookToTable(book2);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const book = Object.fromEntries(formData);
    library.push(book);
    addBookToTable(book);
    form.reset();
});

function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => `the book titled ${this.title} probably written by ${this.author} has about ${this.pages} pages.`
}

function addBookToTable(book) {

    const tableRow = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    td1.textContent = book.title;
    td2.textContent = book.author;
    td3.textContent = book.pages;
    td4.textContent = book.isRead;
    tableRow.append(td1, td2, td3, td4);
    tableBody.appendChild(tableRow);
}

// function showData(data) {

//     const entries = Object.fromEntries(data);
//     console.log(entries);
// }