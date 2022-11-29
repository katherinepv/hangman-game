/*Global Variables*/
const overlay = document.querySelector(".overlay");
const startButton = document.querySelector(".start-game-button");
const keyboard = document.querySelector(".keyboard");
// const hiddenWord = document.querySelector(".hidden-word");

export const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const wordBank = [
  "spaceship",
  "cruiseship",
  "cycling",
  "funicular",
  "walking",
  "submarine",
  "lorry",
  "motorcycle",
  "helicopter",
  "tube",
  "pedalo",
  "kayak",
];

// 1. To Start Game
// 1.1 Function to display overlay (start page) on load
const displayOverlay = () => {
  return (overlay.style.display = "block");
};
// 1.2 Function to remove overlay when "play" button is pressed
const removeOverlay = () => {
  return (overlay.style.display = "none");
};

const startGame = () => {
  removeOverlay();
  generateRandomWord();
  displayHiddenWord();
  displayLivesLeft();
};

overlay.addEventListener("load", displayOverlay);
startButton.addEventListener("click", startGame);

// 2 To play game
// display the keyboard for users to choose letters
const displayKeyboard = () => {
  alphabet.forEach((letter) => {
    const letterHTML = `<button id="${letter}-button">${letter}</button>`;
    return (keyboard.innerHTML += letterHTML);
    // const letterButton = document.querySelector(#${letter}-button)
    // letterButton.addEventListener("click",)
    // use that id in a queryselctor then add event listener
  });
};
console.log(displayKeyboard());

// generate random word for user to guess
let randomWord = "";
const generateRandomWord = () => {
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  return randomWord;
};
console.log(generateRandomWord());

// // display the random word but hidden
// const displayHiddenWord = (randomWord) => {
//   randomWordLettersArr = randomWord.split("");
//   hiddenWord.innerHTML = randomWordLettersArr;
// };
// console.log(displayHiddenWord());

//display how many lives are left
// const displayLivesLeft = () => {
//
// }
