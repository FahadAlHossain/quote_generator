const api_url = 'https://dummyjson.com/quotes/random';
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const getQuote = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

const quoteBtn = () => {
    getQuote(api_url);
}

const tweetBtn = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} ----- by ${author.innerHTML}`, "Tweet Window", "width:600, height:300")
}
getQuote(api_url);