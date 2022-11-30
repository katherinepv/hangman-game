import { wordBank, alphabet } from "./global-variables.js";

/*Global Variables*/

const startButton = document.querySelector(".start-game-button");
const keyboard = document.querySelector(".keyboard");
const hiddenWord = document.querySelector(".hidden-word");

const livesLeftCounter = document.querySelector("#lives-counter");

// 2 To play game

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
  return `<span class="hidden-letters" id="${letter}">_</span>`;
};
// 2.2.2 function to display each letter of random word hidden
const displayHiddenWord = (word) => {
  for (let index = 0; index < word.length; index++) {
    const aLetterFromWord = word[index];
    const wordHTML = hideLetter(aLetterFromWord);
    hiddenWord.innerHTML += wordHTML;
  }
  ////   randomWordLettersArr = randomWord.split("");
  ////   hiddenWord.innerHTML = randomWordLettersArr;
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

// // 2.3.2 function to recieve input from user
// const letterButtons = document.querySelectorAll(".alphabet-buttons");
// let guessedLetter = "";
// const getLetterInput = (event) => {
//   let userLetterInput = event.target.innerText;
//   guessedLetter = userLetterInput;
//   console.log(guessedLetter);
// };

//------------------------

//All handle letter input functions rolled into 1
let guessedLetter = "";
const letterButtons = document.querySelectorAll(".alphabet-buttons");
const handleLetterButtons = (event) => {
  let userLetterInput = event.target.innerText;
  guessedLetter = userLetterInput;

  let lettersFromRandomWordArr = randomWord.split("");
  let hiddenLetters = document.querySelectorAll(".hidden-letters");

  if (lettersFromRandomWordArr.includes(guessedLetter)) {
    lettersFromRandomWordArr.forEach((letterFromRandomWordArr, index) => {
      if (letterFromRandomWordArr == guessedLetter) {
        hiddenLetters[index].innerText = letterFromRandomWordArr;
      }
    });
  }
};

// // 2.3.4 event listener for letter buttons
// for (let index = 0; index < letterButtons.length; index++) {
//   letterButtons[index].addEventListener("click", getLetterInput);
// }

// // 2.3.5 check if guessedLetter = a letter in randomWord
// const checkLettersMatch = (letter) => {
//   const hiddenLetters = document.querySelectorAll(".hidden-letters");
//   for (let index = 0; index < hiddenLetters.length; index++) {
//     const hiddenLetter = hiddenLetters[index];
//     if (hiddenLetter == guessedLetter) {
//       hiddenLetter.innerHTML = letter;
//     }
//   }
// };
// checkLettersMatch(guessedLetter);

for (let index = 0; index < letterButtons.length; index++) {
  letterButtons[index].addEventListener("click", handleLetterButtons);
}

// -------------------------------
// 2.4 display how many lives are left

// let numOflivesLeft = [5, 4, 3, 2, 1, 0];
// const displayLivesLeft = () => {
//   for (let index = 0; index < numOflivesLeft.length; index--) {
//     livesLeftCounter.innerText += numOflivesLeft.
//   }
// };
// -------------------------------
// const startGame = () => {
//   removeOverlay();
//   generateRandomWord();
//   // displayHiddenWord();
//   // displayLivesLeft();
// };

// startButton.addEventListener("click", startGame);

// 2.5 display how many lives are left
