const quotes = document.querySelector(".quote");
buttons = document.querySelector("button");
names = document.querySelector(".writer");
talk = document.querySelector(".automated-speech");
copied = document.querySelector(".copy");
tweets = document.querySelector(".tweet");
synth = speechSynthesis;

function getQuote() {
    buttons.classList.add("loading");
    buttons.innerText = "Loading New Quote...";
    fetch("https://api.quotable.io/random")
      .then(function (response) {
        return response.json();
      })
      .then((result) => {
        quotes.innerText = result.content;
        names.innerText = result.author;
        buttons.classList.remove("loading");
        buttons.innerText = "New Quote";
      });

  // fetch("https://type.fit/api/quotes")
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     let quotes = data;

  //     quotes.map(function (quote) {
  //       let quoteD = document.querySelector(".quote");
  //       let nameD = document.querySelector(".writer");
  //       quoteD.innerText = `${quote.text}`;
  //       nameD.innerText = `${quote.author}`;
  //     });
  //   });
}

copied.addEventListener("click", () => {
  navigator.clipboard.writeText(quotes.innerText);
});

tweets.addEventListener("click", () => {
  let url = `https://twitter.com/intent/tweet?url=${quotes.innerText}`;
  window.open(url);
});

buttons.addEventListener("click", getQuote);
