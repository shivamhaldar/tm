window.addEventListener('load', init);

const levels = {easy: 5, medium: 3, hard: 1};
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying; 

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
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'new',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'born',
  'definition'
];

function init(){
  console.log('Stay Focused, You Got This! I love you!!');
  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener('input', startMatch)
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function startMatch(){
  if(matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if(score === -1){
    scoreDisplay.innerHTML = '0';
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

function showWord(words){
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countdown(){
  if(time > 0){
    time--;

  } else if(time === 0){
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'Game Over';
    score = -1;
  }
}
