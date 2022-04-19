const quotes = document.querySelector(".quote");
buttons = document.querySelector("button");
names = document.querySelector(".writer")
talk = document.querySelector(".automated-speech")
copied = document.querySelector(".copy")
tweets = document.querySelector(".tweet")
synth = speechSynthesis;

function getQuote(){
    buttons.classList.add("loading");
    buttons.innerText ="Loading New Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result =>{
        quotes.innerText = result.content;
        names.innerText = result.author;
        buttons.classList.remove("loading");
        buttons.innerText = "New Quote";
    })
}

copied.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quotes.innerText);
})

tweets.addEventListener("click", ()=>{
    let url = `https://twitter.com/intent/tweet?url=${quotes.innerText}`;
    window.open(url);
} )

buttons.addEventListener("click", getQuote);