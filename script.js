let library = [];
const form = document.querySelector('form');
const bookList = document.querySelector('#bookList');
const addBook = document.querySelector('#addBook');
const formDialog = document.querySelector('dialog');
const cancelBtn = document.querySelector('#cancel');

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

addBook.onclick = () => {
    formDialog.showModal();
};

cancelBtn.onclick = () => {
    formDialog.close();
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const book = Object.fromEntries(formData);
    library.push(book);
    showLibrary();
    form.reset();
    formDialog.close();
});

function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function showLibrary() {

    clear(bookList);

    for(let i = 0; i < library.length; i++) {

        const bookCase = document.createElement('div');
        const bookTitle = document.createElement('h3');
        bookTitle.textContent = library[i].title;
        bookTitle.style.textDecoration = 'underline';
        const bookDetail = document.createElement('p');
        bookDetail.textContent = `This book is written by ${library[i].author} and has about ${library[i].pages} pages.`;
        const read = document.createElement('h4');
        library[i].isRead === 'on' ? read.textContent = 'Read' : read.textContent = 'Unread';
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