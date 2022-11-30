import { wordBank, alphabet } from "./global-variables.js";

/*Global Variables*/

const startButton = document.querySelector(".start-game-button");
const keyboard = document.querySelector(".keyboard");
const hiddenWord = document.querySelector(".hidden-word");
const letterButtons = document.querySelectorAll(".keyboard");

// 2 To play game
// 2.1 display the keyboard for users to choose letters
const displayKeyboard = () => {
  //   let letterHTMl = "";
  //   for (let index = 0; index < alphabet.length; index++) {
  //     letterHTMl += alphabet[index];
  //   }
  //   keyboard.innerHTML = letterHTMl;
  // };

  alphabet.forEach((letter) => {
    const letterHTML = `<button id="${letter}-button">${letter}</button>`;
    return (keyboard.innerHTML += letterHTML);
    // letterButton.addEventListener("click",)
    // use that id in a queryselctor then add event listener
  });
};
console.log(displayKeyboard());

const getLetterInput = (event) => {
  const userLetterInput = event.target.innerText;
  guessedLetter = userLetterInput;
  console.log(guessedLetter);
};

// event listener for letter buttons
for (let index = 0; index < letterButtons.length; index++) {
  letterButtons[index].addEventListener("click", getLetterInput);
}

// const handleKeyboardButtons = () => {
//   const letterButton = document.querySelectorAll(".keyboard");

// }

// 2.2 generate random word for user to guess
let randomWord = "";
const generateRandomWord = () => {
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  return randomWord;
};
console.log(generateRandomWord());

// 2.3 display the random word but hidden
const hideLetterHTML = (letter) => {
  return `<span id="${letter}">_</span>`;
};

const displayHiddenWord = (word) => {
  for (let index = 0; index < word.length; index++) {
    const aLetterFromWord = word[index];
    const wordHTML = hideLetterHTML(aLetterFromWord);
    hiddenWord.innerHTML += wordHTML;
  }
  ////   randomWordLettersArr = randomWord.split("");
  ////   hiddenWord.innerHTML = randomWordLettersArr;
};
displayHiddenWord(randomWord);

const startGame = () => {
  removeOverlay();
  generateRandomWord();
  // displayHiddenWord();
  // displayLivesLeft();
};

startButton.addEventListener("click", startGame);

// 2.4 display how many lives are left
// const displayLivesLeft = () => {
//
// }

// 2.5 display how many lives are left
