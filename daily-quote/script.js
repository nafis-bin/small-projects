// const api_url = 'https://zenquotes.io/api/random';
// const api_url = 'https://quotes.rest/qod?language=en';


const api_url = 'https://api.quotable.io/random';

async function getQuote() {
  const response = await fetch(api_url);
  let data = await response.json();
  console.table(data);
}

getQuote();