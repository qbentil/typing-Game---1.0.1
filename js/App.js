  // window.addEventListener("load", init);
//globals

const levels = {
  easy: 15,
  medium: 10,
  hard: 5,
};

const currentLevel = levels.medium;
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDispaly = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#messages");
const seconds = document.querySelector("#seconds");
const restart = document.querySelector("#restart");


document.getElementById("btnStart").addEventListener("click", function(){
  this.style.display = "none"
  wordInput.focus()
  init();
})

//Initialize Game
function init() {
  seconds.innerHTML = currentLevel;
  //load word from array
  showWords(words);
  //call countdowm every second
  setInterval(countdown, 1000);
  // start matching word input
  wordInput.addEventListener("input", startMatch);
  //checking status of the game
  setInterval(checkStatus, 50);
}

function startMatch() {
  if (matchWords()) {
    isplaying = true;
    time = currentLevel + 1;
    showWords(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDispaly.innerHTML = 0;
  } else {
    scoreDispaly.innerHTML = score;
  }
}

// match current word with word input
function matchWords() {
  let text = wordInput.value;
  if (text.toLowerCase() === currentWord.innerHTML) {
    message.innerHTML = "CORRECT !";
    message.style.color = "#0f0"
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}
function showWords(words) {
  //generate random index
  const randomIndex = Math.floor(Math.random() * words.length);
  //random word
  currentWord.innerHTML = words[randomIndex];
}
//creating the countdown function
function countdown() {
  if (time > 0) {
    //decrement
    time--;

    // 
  } else if (time === 0) {
    isplaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!";
    message.style.color = "#f00";
    // restart.style.display = "block"
    score = -1;
  }
}
