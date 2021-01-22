const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    src:
      "https://img1.od-cdn.com/ImageType-400/4575-1/85E/A00/CF/%7B85EA00CF-F096-4068-8876-960C1075ED20%7DImg400.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    src:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    src:
      "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
  },
];

function readingList(books) {
  let content = document.getElementById("content");
  content.innerHTML = "<strong>Book List</strong>";
  content.style.fontSize = "30";

  let ul = document.createElement("ul");
  content.appendChild(ul);

  books.forEach((book) => {
    let li = document.createElement("li");
    let para = document.createElement("p");
    para.innerHTML = `${book.title} - ${book.author}`;
    para.style.fontSize = "15px";
    let imgBook = document.createElement("img");
    imgBook.src = book.src;
    imgBook.style.width = "60%";
    li.appendChild(para);
    li.appendChild(imgBook);
    ul.appendChild(li);
    ul.style.listStyle = "none";
    ul.style.display = "flex";
    li.style.width = "90%";
    li.style.marginRight = "40px";

    if (book.alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
  });
}

readingList(books);
