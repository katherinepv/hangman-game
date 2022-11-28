const keyboard = document.querySelector(".keyboard");
const hiddenWord = document.querySelector(".hidden-word");

const alphabet = [
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

const wordBank = [
  "spaceship",
  "cruiseship",
  "cycling",
  "funicular",
  "walking",
  "submarine",
];

// display the keyboard for users to choose letters
const displayKeyboard = () => {
  alphabet.forEach((letter) => {
    const letterHTML = `<button>${letter}</button>`;
    return (keyboard.innerHTML += letterHTML);
  });
};
console.log(displayKeyboard());

// generate random word fro user to guess
const generateRandomWord = () => {
  let randomWord = "";
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  return randomWord;
};
console.log(generateRandomWord());

//
