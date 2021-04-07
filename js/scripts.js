const quotes = [
  "Out of my way, I've broken my water. There's a baby inside of me running out of water.",
  "Cat in the wall. Now you’re talking my language.",
  "So you saw me eat that Hot Pocket I found in the garbage?",
  "I’m not an executioner. I’m the best goddamn bird lawyer in the world.",
  "‘Just get a job?’ Why don’t I strap on my job helmet and squeeze down into a job cannon, and fire off into job land, where jobs grow on jobbies?!",
  "I am going to smack everyone into tiny little pieces.",
  "I do backflips every single day of my life.",
  "I drank three bottles of champagne and hung out with a stray dog all night under a bridge.",
  "Fight milk! The first alcoholic dairy-based protein drink for bodyguards!",
  "And although I seem relaxed, I’m actually incredibly tense at all times.",
  "Don’t you play coy with me, you little bitch. I’m gonna stay right here, and I’m gonna wait for my minions to swarm me. And swarm they will.",
  "It’s like when I’m doing good in the game I’m doing good in life.",
  "I immersed myself in the culture. Tasting the cuisine. But mostly doing cocaine.",
  "I’m not gonna be buried in a grave. When I’m dead, just throw me in the trash.",
  "If we’re gonna turn this company around, we gotta start cutting the crust off this shit sandwich!",
  "If you’re dealt a bunch of lemons, you got to take those lemons, and stuff them down somebody’s throat until they see yellow.",
]
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
//the starting time
let startTime = Date.now();
//page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
