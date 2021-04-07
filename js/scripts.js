const quotes = [
  "Out of my way, I've broken my water. There's a baby inside of me running out of water.",
  "Cat in the wall. Now you're talking my language.",
  "So you saw me eat that Hot Pocket I found in the garbage?",
  "I'm not an executioner. I'm the best goddamn bird lawyer in the world.",
  "'Just get a job?' Why don't I strap on my job helmet and squeeze down into a job cannon, and fire off into job land, where jobs grow on jobbies?!",
  "I am going to smack everyone into tiny little pieces.",
  "I do backflips every single day of my life.",
  "I drank three bottles of champagne and hung out with a stray dog all night under a bridge.",
  "Fight milk! The first alcoholic dairy-based protein drink for bodyguards!",
  "And although I seem relaxed, I'm actually incredibly tense at all times.",
  "Don't you play coy with me, you little bitch. I'm gonna stay right here, and I'm gonna wait for my minions to swarm me. And swarm they will.",
  "It's like when I'm doing good in the game I'm doing good in life.",
  "I immersed myself in the culture. Tasting the cuisine. But mostly doing cocaine.",
  "I'm not gonna be buried in a grave. When I'm dead, just throw me in the trash.",
  "If we're gonna turn this company around, we gotta start cutting the crust off this shit sandwich!",
  "If you're dealt a bunch of lemons, you got to take those lemons, and stuff them down somebody's throat until they see yellow.",
];

document.getElementById('landing-button').addEventListener('click', () => {
  $('#landing-page').toggle();
  $('.page').show();
  $('.card').show();
  $('.page-header').show();
});

// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
//the starting time
let startTime = Date.now();
//UI items
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', () => {
  //get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  //put the quote into an array of words
  words = quote.split(' ');
  //reset the word index for tracking
  wordIndex = 0;

  // UI updates
  //create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  //convert into a string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  //highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  //clear any prior messages
  messageElement.innerText = '';

  //set up and clear the text box
  typedValueElement.value = '';
  //set focus
  typedValueElement.focus();
  //set event handler

  //start timer
  startTime = new Date().getTime();
});

typedValueElement.addEventListener('input', (e) => {
//get current word
const currentWord = words[wordIndex];
//get current value
const typedValue = typedValueElement.value;

if (typedValue === currentWord && wordIndex === words.length -1) {
  //end of quote
  //display status
  const elapsedTime = new Date().getTime() - startTime;
  const message = `CONGRATULATIONS! YOU FINISHED IN ${elapsedTime/1000} seconds.`;
  messageElement.innerText = message;
} else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
  //end of word
  //clear the typedValueElement for the new word
  typedValueElement.value = '';
  //move to the next word
  wordIndex++;
  //reset the class name for all elements in quote
  for (const wordElement of quoteElement.childNodes) {
    wordElement.className = '';
  }
  //highlight new word
  quoteElement.childNodes[wordIndex].className = 'highlight';
} else if (currentWord.startsWith(typedValue)) {
  //currently correct
  //highlight next word
  typedValueElement.className = '';
} else {
  //error state
  typedValueElement.className = 'error';
}
});