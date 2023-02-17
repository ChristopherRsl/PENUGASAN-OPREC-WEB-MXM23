document.addEventListener("DOMContentLoaded", (event) => {
    const url = "https://api.quotable.io/random";

    const quote = document.getElementById("quote");
    const cite = document.getElementById("author");
    const button = document.getElementById("newQuote");
  
    async function updateQuote() {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            quote.textContent = ' "'+data.content+'" ';
            cite.textContent = data.author;
        } else {
            quote.textContent = "An error occured";
        }
    }
    button.addEventListener("click", updateQuote);

    updateQuote();
  });
