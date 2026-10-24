const calculator = document.getElementById("calculator");
const screen = document.querySelector("input");
const numbersContainer = document.getElementById("numbersContainer");
const settingsContainer = document.getElementById("settingsContainer");
const buttonsContainer = document.getElementById("buttonsContainer");
const alternativeNumber = document.getElementById("num1");
const operatorSign = document.getElementById("operator");

// Create the buttons using DOM
for (let i = 1; i < 11; i++) {
  const numberBtn = document.createElement("button");
  numberBtn.classList.add("numberBtn");
  if (i === 10) numberBtn.textContent = "0";
  else numberBtn.textContent = i;
  numbersContainer.appendChild(numberBtn);
}

const settings = ["+", "-", "/", "x", "AC", "DEL", "="];
for (const operator of settings) {
  const settingsBtn = document.createElement("button");
  settingsBtn.classList.add("settingsBtn");
  settingsBtn.textContent = operator;
  settingsBtn.dataset.operator = operator;
  settingsContainer.appendChild(settingsBtn);
}

// DONE: Make the buttons and caclculator have rounded corners and make the buttons appear more better
// Make an array of the settings buttons and make the button maker loop on the array instead of index
// Increase the font sizes
// remove the logs for now and come back to it later
//
// TODO:
// Clean the input screen and make it better
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
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      break;
  }
}

let num1 = 0;
let operator = "";

function reset() {
  num1 = null;
  operator = "";
  alternativeNumber.textContent = "";
  operatorSign.textContent = "";
  screen.value = "";
}
buttonsContainer.addEventListener("click", (ev) => {
  if (ev.target.matches(".numberBtn")) {
    screen.value += ev.target.textContent;
  }

  if (ev.target.matches(".settingsBtn")) {
    const operators = ["+", "-", "/", "x"];
    const currentOperator = ev.target.dataset.operator;
    if (operators.includes(currentOperator)) {
      if (num1 || screen.value) {
        if (!operator) operator = currentOperator;
        if (num1) {
          let result = operation(operator, Number(num1), Number(screen.value));
          reset();
          num1 = result;
          alternativeNumber.textContent = num1;
        }
        operator = currentOperator;
        operatorSign.textContent = currentOperator;
      }
      if (screen.value) {
        num1 = screen.value;
        alternativeNumber.textContent = num1;
      }
      screen.value = "";
    } else {
      switch (ev.target.dataset.operator) {
        case "AC":
          reset();
          break;
        case "=":
          if (num1) {
            let result = operation(
              operator,
              Number(num1),
              Number(screen.value),
            );
            reset();
            screen.value = result;
          }
          break;
        case "DEL":
          if (!screen.value) {
            if (num1) {
              let value = num1;
              reset();
              screen.value = value;
            }
          } else screen.value = screen.value.slice(0, screen.value.length - 1);
          break;

        default:
          break;
      }
    }
  }
});
//
//TODO: add event listner to numbers to the calculator
document.addEventListener("keydown", (ev) => {});
