let quote = document.querySelector(".quote");
let getQuoteBtn = document.querySelector(".getQuote");
let author = document.querySelector(".author");

getQuoteBtn.addEventListener("click", function () {
  getQuote();
})

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerText = data.content;
      author.innerText = "Author : " + data.author;
    });
};

getQuote();