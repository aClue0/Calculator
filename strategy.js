const calculator = document.getElementById("calculator");
const screen = document.querySelector("input");

const numbersContainer = document.getElementById("numbersContainer");
const settingsContainer = document.getElementById("settingsContainer");

// ARITHMETIC FUNCTIONS
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

function handleNumbersButton(button) {}
function handleSettingsButton(button) {}

for (let i = 1; i < 11; i++) {
  const numberBtn = document.createElement("button");
  numberBtn.classList.add("numberBtn");
  if (i === 10) numberBtn.textContent = "0";
  else numberBtn.textContent = i;
  numbersContainer.appendChild(numberBtn);
}

for (let i = 0; i < 8; i++) {
  const settingsBtn = document.createElement("button");
  settingsBtn.classList.add("settingsBtn");
  settingsBtn.textContent = i;
  handleSettingsButton(settingsBtn);
  settingsContainer.appendChild(settingsBtn);
}
