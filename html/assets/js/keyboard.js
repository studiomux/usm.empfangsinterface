const Keyboard = window.SimpleKeyboard.default;
const input = document.querySelector('.input');
const simpleKeyboard = document.querySelector('#keyboard');

// input.addEventListener("focus", (event) => {
//   simpleKeyboard.classList.toggle('show');
// });
// input.addEventListener("blur", (event) => {
//   simpleKeyboard.classList.toggle('show');
// });

const myKeyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button)
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}

