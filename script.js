const api_url = 'https://dummyjson.com/quotes/random';

const getQuote = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

getQuote(api_url);