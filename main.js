import { wordBank, alphabet, livesLeftImages } from "./global-variables.js";
const livesLeftImage = document.querySelector(".lives-left-image");

// 1 Start Page
const startPageOverlay = document.querySelector(".start-page-overlay");
const startButton = document.querySelector("#start-game-button");

const startInitialGame = (event) => {
  startPageOverlay.style.display = "none";
};

startButton.addEventListener("click", startInitialGame);

// 2 To play game

const keyboard = document.querySelector(".keyboard");
const hiddenWord = document.querySelector(".hidden-word");

// 2.1 generate random word for user to guess
let randomWord = "";
const generateRandomWord = () => {
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  return randomWord;
};
console.log(generateRandomWord());

// 2.2 display the random word but hidden
// 2.2.1 function to display a letter from word with "_"
const hideLetter = (letter) => {
  return `<span class="hidden-letters">_</span>`;
};
// 2.2.2 function to display each letter of random word hidden
const displayHiddenWord = (word) => {
  for (let index = 0; index < word.length; index++) {
    const aLetterFromWord = word[index];
    const wordHTML = hideLetter(aLetterFromWord);
    hiddenWord.innerHTML += wordHTML;
  }
};
displayHiddenWord(randomWord);

// 2.3 display the keyboard for users to choose letters and recieve input
// 2.3.1 function to display the keyboard in the keyboard inner html
const displayKeyboard = () => {
  alphabet.forEach((letter) => {
    const letterHTML = `<button class="alphabet-buttons" id="${letter}-button">${letter}</button>`;
    return (keyboard.innerHTML += letterHTML);
  });
};
displayKeyboard();

// 2.3.2 handle letter buttons to replace dashes with letters if they match the random word + handle lives
let guessedLetter = "";
let livesLeft = 7;
console.log(livesLeft);
let correctGuessedLetters = 0;
const letterButtons = document.querySelectorAll(".alphabet-buttons");
const livesLeftCounter = document.querySelector("#lives-counter");

const disableAllLetterButtons = () => {
  letterButtons.forEach((button) => {
    button.disabled = true;
  });
};

const enableAllLetterButtons = () => {
  letterButtons.forEach((button) => {
    button.disabled = false;
  });
};

// main game
const handleLetterButtons = (event) => {
  event.target.disabled = true;
  // this receives the user letter input
  let userLetterInput = event.target.innerText;
  guessedLetter = userLetterInput;
  console.log(guessedLetter);
  // this changes the random word into an array of letters
  let lettersFromRandomWordArr = randomWord.split("");
  let hiddenLetters = document.querySelectorAll(".hidden-letters");
  // checks if user letter input is matches letters on the word to guess (random word)
  if (lettersFromRandomWordArr.includes(guessedLetter)) {
    lettersFromRandomWordArr.forEach((letterFromRandomWordArr, index) => {
      if (letterFromRandomWordArr == guessedLetter) {
        // this replaces the dash for the corresponding letter guessed
        hiddenLetters[index].innerText = letterFromRandomWordArr;
        correctGuessedLetters += 1;
        console.log(correctGuessedLetters);
        if (correctGuessedLetters == randomWord.length) {
          disableAllLetterButtons();
          const delayOverlay = setTimeout(wonGameOverlayOn, 1000);
          return delayOverlay;
        }
      }
    });
  } else {
    //lose life
    livesLeft -= 1;
    console.log(livesLeft);
    livesLeftCounter.innerHTML = `${livesLeft}`;
    livesLeftImage.src = livesLeftImages[livesLeft];
    if (livesLeft == 0) {
      disableAllLetterButtons();
      gameOverOverlayOn();
    }
  }
};

for (let index = 0; index < letterButtons.length; index++) {
  letterButtons[index].addEventListener("click", handleLetterButtons);
}

// ---------------------
// retry button
const retryButton = document.querySelector("#action-buttons__retry");

const retrySameRandomWord = (event) => {
  enableAllLetterButtons();
  hiddenWord.innerHTML = "";
  displayHiddenWord(randomWord);
  livesLeftCounter.innerHTML = 7;
  livesLeft = 7;
  correctGuessedLetters = 0;
  livesLeftImage.src = livesLeftImages[livesLeft];
};

retryButton.addEventListener("click", retrySameRandomWord);
//---------------------
// Show solution button

const solutionButton = document.querySelector("#action-buttons__solution");
const showSolution = (event) => {
  hiddenWord.innerHTML = `<p class="solution-word">${randomWord}</p>`;
  disableAllLetterButtons();
};

solutionButton.addEventListener("click", showSolution);

// ---------------------
// new game button

const newGameButton = document.querySelector("#action-buttons__new-game");
console.log(newGameButton);

const newGame = (event) => {
  enableAllLetterButtons();
  hiddenWord.innerHTML = "";
  // removeOverlay();
  randomWord = generateRandomWord();
  console.log(randomWord);
  displayHiddenWord(randomWord);
  livesLeftCounter.innerHTML = 7;
  livesLeft = 7;
  correctGuessedLetters = 0;
  livesLeftImage.src = livesLeftImages[livesLeft];
};

newGameButton.addEventListener("click", newGame);

// game over function

const gameOverOverlay = document.querySelector(".game-over-overlay");
const gameOverOverlayOffButton = document.querySelector(
  "#close-game-over-overlay-button"
);
const gameOverOverlayOn = () => {
  gameOverOverlay.style.display = "block";
};

const removeGameOverOverlay = (event) => {
  gameOverOverlay.style.display = "none";
};

gameOverOverlayOffButton.addEventListener("click", removeGameOverOverlay);

//-----------------
// win function
const wonOverlay = document.querySelector(".won-game-overlay");
const newGameOverlayButton = document.querySelector(
  "#won-game-new-game-button"
);
const closeWonOverlayButton = document.querySelector("#close-won-game-overlay");
const wonGameOverlayOn = () => {
  wonOverlay.style.display = "block";
};

const closeWonOverlay = (event) => {
  wonOverlay.style.display = "none";
};

const startNewGameFromWonGame = (event) => {
  wonOverlay.style.display = "none";
  newGame(event);
};

closeWonOverlayButton.addEventListener("click", closeWonOverlay);

newGameOverlayButton.addEventListener("click", startNewGameFromWonGame);
