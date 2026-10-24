const calculator = document.getElementById("calculator");
const screen = document.querySelector("input");

const numbersContainer = document.getElementById("numbersContainer");
const settingsContainer = document.getElementById("settingsContainer");

// TODO:
// Make the buttons and caclculator have rounded corners and make the buttons appear more better
// Make an array of the settings buttons and make the button maker loop on the array instead of i
// Clean the input screen and make it better
// Increase the font sizes
// remove the logs for now and come back to it later
// Add event handlers for the buttons and the settings

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

// TODO:Create the opearator function that takes an operator and 2 numbers and calls a function
function operation(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      break;
  }
}

for (let i = 1; i < 11; i++) {
  const numberBtn = document.createElement("button");
  numberBtn.classList.add("numberBtn");
  if (i === 10) numberBtn.textContent = "0";
  else numberBtn.textContent = i;
  numbersContainer.appendChild(numberBtn);
}

const settings = ["+", "-", "/", "x", "AC", "DEL", "="];
for (const button of settings) {
  const settingsBtn = document.createElement("button");
  settingsBtn.classList.add("settingsBtn");
  settingsBtn.textContent = button;
  settingsContainer.appendChild(settingsBtn);
}

numbersContainer.addEventListener("click", (ev) => {
  if (ev.target.matches(".numberBtn")) {
    const number = Number(ev.target.textContent);
    screen.value += number;
  }

  if (ev.target.matches(".settingsBtn")) {
  }
});
