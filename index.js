const quotes = document.querySelector(".quote");
buttons = document.querySelector("button");
names = document.querySelector(".writer");
talk = document.querySelector(".automated-speech");
copied = document.querySelector(".copy");
tweets = document.querySelector(".tweet");
synth = speechSynthesis;

// get random quote from api 
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

// speech button
talk.addEventListener("click", ()=>{
  if(!buttons.classList.contains("loading")){
      let utterance = new SpeechSynthesisUtterance(`${quotes.innerText} by ${names.innerText}`);
      synth.speak(utterance);
      setInterval(()=>{
          !synth.speaking ? talk.classList.remove("active") : talk.classList.add("active");
      }, 8);
  }
});

// copy the quotes
copied.addEventListener("click", () => {
  navigator.clipboard.writeText(quotes.innerText);
});

// tweets quotes
tweets.addEventListener("click", () => {
  let url = `https://twitter.com/intent/tweet?url=${quotes.innerText}` + '\n' +"  https://quotes-azure.vercel.app/";
  window.open(url);
});

buttons.addEventListener("click", getQuote);
