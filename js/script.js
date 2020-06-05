/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat



// quotes array
var quotes = [
  {"quote":"Leadership involves finding a parade and getting in front of it.", "source":"John Naisbitt"},
  {"quote":"Happiness is a warm puppy.", "source":"Charles Schulz", "year":1962, "citation":"Brief text and illustrations"},
  {"quote":"I knew I was an unwanted baby when I saw that my bath toys were a toaster and a radio.", "source":"Joan Rivers"},
  {"quote":"I refuse to join any club that would have me as a member.", "source":"Groucho Marx"},
  {"quote":"Let It Be", "source":"John Lennon", "year":"1970", "citation":"Let It Be"},
  {"quote":"After a good dinner one can forgive anybody, even one's own relations.", "source":"Oscar Wilde", "citation":"A Woman of no Importance"}
]

// Selects random number between 0 and 255
function getRandomNumber(max_number=256){
  return Math.floor(Math.random() * max_number);
  
}

// Selects random quote from quotes array
const getRandomQuote = function(){
  var n_quotes = quotes.length;
  var selected_quote_idx = Math.floor(Math.random()*n_quotes);
  var selected_quote = quotes[selected_quote_idx];

  return selected_quote
}


// Prints randomly selected quote into quote box
function printQuote() {
    
  "use strict";
  
  // Sets random color 
  var currentColor = `rgb(${getRandomNumber()}, ${getRandomNumber()},${getRandomNumber()})` ;
  document.body.style.backgroundColor = currentColor;


  // Selects random quote
  var quote = getRandomQuote();
  

  // Appends html string like tags with quote content
  var message = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`
  if ( quote.citation ) {
    message += `<span class = "citation">${quote.citation}</span>`;
      }
  if ( quote.year ) {
    message += `<span class = "year">${quote.year}</span>`;
      }
  message += `</p>`;
  console.log(message);

  
  // Selects quote-box class id and replaces it with html string that contains quote info
  document.querySelector( '#quote-box' ).innerHTML = message;
  
    
        
};


// Print new quote every 3 seconds.
setInterval(function () {
  printQuote();
},3000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);