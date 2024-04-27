const myLibrary = [];

function Book(title, author, pages)
{
   this.title = title;
   this.author = author;
   this.pages = pages;
}

function addBookToMyLibrary(){
    let title = prompt("Please enter the title of the book");
    let author = prompt("Please enter the author's name");
    let pages = prompt("Please enter the number of pages of the book");
    myLibrary.push(new Book(title,author,pages));
}


let a = new Book("Harry Potter", "Hi", 10);
let b = new Book("The Tree", "James", 9);
let c = new Book("Superman", "Marsh", 50);
myLibrary.push(a,b,c);


const bookContainer = document.querySelector(".book-container");

myLibrary.forEach(function (book) {
    let a = document.createElement("div");
    a.classList.add("card");
    let b = document.createElement("h1");
    b.textContent = book.title
    ;
    c = document.createElement("h2");
    c.textContent = `By ${book.author}`;
    d = document.createElement("h3");
    d.textContent = book.pages + " pages";
    bookContainer.appendChild(a);

    a.appendChild(b);
    a.appendChild(c);
    a.appendChild(d);
});

    const button = document.querySelector("button");
    const sidebar = document.querySelector(".sidebar");
    button.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });

