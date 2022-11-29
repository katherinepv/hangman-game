/*Global Variables*/
const overlay = document.querySelector(".overlay");
const startButton = document.querySelector(".start-game-button");
const keyboard = document.querySelector(".keyboard");
const hiddenWord = document.querySelector(".hidden-word");

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
  let htmlString = "";
  htmlString += `
  <section class="overlay-content">
  <img src="https://media.istockphoto.com/illustrations/simple-illustration-of-hangman-game-illustration-id1196954772?k=6&m=1196954772&s=170667a&w=0&h=iNA3SlxYdtJZrtzu7uxEv18YCGEepC-Zs8gmSgvSg6c="
  alt="Hangman" class="overlay-image"/> 
  <h1>HANGMAN</h1>
  <div class="start-game-button">
  <a href="#game">
        <button>PLAY</button>
      </a>
      </div>
  </section>`;
  overlay.innerHTML = htmlString;
  // return (overlay.style.display = "block");
};
// 1.2 Function to remove overlay when "play" button is pressed
const removeOverlay = () => {
  return (overlay.style.display = "none");
};

const startGame = () => {
  removeOverlay();
  generateRandomWord();
  // displayHiddenWord();
  // displayLivesLeft();
};

overlay.addEventListener("load", displayOverlay);
startButton.addEventListener("click", startGame);

// 2 To play game
// 2.1 display the keyboard for users to choose letters
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
const hiddenWordHTML = (letter) => {
  return `<spanp id="${letter}">_</span>`;
};
console.log(hiddenWordHTML());

const displayHiddenWord = (word) => {
  for (let index = 0; index < word.length; index++) {
    const aLetterFromWord = word[index];
    const wordHTML = hiddenWordHTML(aLetterFromWord);
    hiddenWord.innerHTML += wordHTML;
  }

  //   randomWordLettersArr = randomWord.split("");
  //   hiddenWord.innerHTML = randomWordLettersArr;
};
displayHiddenWord(randomWord);

// 2.4 display how many lives are left
// const displayLivesLeft = () => {
//
// }

// 2.5 display how many lives are left

// 3 Game Over
// 3.1 overlay for game over screen
// 3.2 retry button
// 3.3 new game button -> same function as the play button from the start?
