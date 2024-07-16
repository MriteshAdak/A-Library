
const form = document.querySelector('form');
const bookList = document.querySelector('#bookList');
// const submit = document.querySelector('button');

let library = [];

const book1 = new Book('monk sold ferrari', 'some monk', 123, 'no');
library.push(book1);

const book2 = new Book('Rich poor dads', 'someones son', 321, 'No');
library.push(book2);

showLibrary();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const book = Object.fromEntries(formData);
    library.push(book);
    showLibrary();
    form.reset();
});

function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => `the book titled ${this.title} probably written by ${this.author} has about ${this.pages} pages.`
}

function showLibrary() {

    clear(bookList);

    for(let i = 0; i < library.length; i++) {

        const bookCase = document.createElement('div');
        const bookTitle = document.createElement('h3');
        bookTitle.textContent = library[i].title;
        const bookDetail = document.createElement('p');
        bookDetail.textContent = `This book is written by ${library[i].author} and consists of ${library[i].pages} pages.`;
        const read = document.createElement('p');
        library[i].isRead === 'on' ? read.textContent = 'You have read it' : read.textContent = 'You have not read it yet';
        const delButton = document.createElement('button');
        delButton.textContent = 'Remove';
        delButton.onclick = () => {
            library.splice(i, 1);
            showLibrary();
        }

        bookCase.append(bookTitle, bookDetail, read, delButton);
        bookList.appendChild(bookCase);
    }
}

function clear(node) {
    let child = node.firstChild;
    while(child) {
        node.removeChild(child);
        child = node.firstChild;
    }
}