window.addEventListener('load', init);

// globals

// available levels
const levels = {easy: 5, medium: 3, hard: 1};
// change levels
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying; // when the player is typing: true, when the player wins/looses: false

// dom elements
const currentWord = document.querySelector('#current-word');
const wordInput = document.querySelector('#word-input');
const message = document.querySelector('#message');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'game',
  'new',
  'main',
  'game',
  'speaker',
  'chair',
  'speaker',
  'phone',
  'airplane',
  'helecopter',
  'time',
  'score',
  'paragraph',
  'bike',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'born',
  'definition'
];

//Initialize Game
function init(){
  console.log('Stay Focused, You Got This! I love you!!');
  // show number of sec
  seconds.innerHTML = currentLevel;
  // load random word from array
  showWord(words);
  // start matching on word input
  wordInput.addEventListener('input', startMatch)
  // call countdown every sec
  setInterval(countdown, 1000);
  // check status of game
  setInterval(checkStatus, 50);
}

// start match
function startMatch(){
  if(matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  // if score is -1, display 0
  if(score === -1){
    scoreDisplay.innerHTML = '0';
  } else {
    scoreDisplay.innerHTML = score;
  }
}
// match currentWord to wordInput
function matchWords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// pick & show random word
function showWord(words){
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // output random word
  currentWord.innerHTML = words[randIndex];
}

// countdown timer
function countdown(){
  // make sure time is not run out
  if(time > 0){
    // decrement
    time--;

  } else if(time === 0){
    // game is over
    isPlaying = false;
  }
  // show time
  timeDisplay.innerHTML = time;
}

// check game status
function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'Game Over';
    score = -1;
  }
}