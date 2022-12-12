let dispValue = document.getElementById("input-text");
let dispValueBottom = document.getElementById("input-text2");
let decimalButton = document.getElementById("decimal-button");

let prevResult = 0;
let firstOperand = 0;
let placeHolder = 0;
let operatorValue = "";

// Calculator screen functions
let updateDisplay = (number) => {
  dispValue.value += number;
  firstOperand = parseFloat(dispValue.value);
};

let operationKeys = (keyVal) => {
  if (placeHolder) {
    operate();
    dispValueBottom.textContent = prevResult;
  }

  decimalButton.disabled = false;
  dispValue.value = "";
  placeHolder = firstOperand;
  firstOperand = 0;
  operatorValue = keyVal;
  dispValueBottom.value = prevResult;
};

const clr = () => {
  decimalButton.disabled = false;
  dispValue.value = "";
  dispValueBottom.value = "";
  firstOperand = 0;
  placeHolder = 0;
  prevResult = 0;
};

const backSpace = () => {
  dispValue.value = dispValue.value.slice(0, -1);
  firstOperand = parseFloat(dispValue.value);
  prevResult = parseFloat(dispValue.value);
};

// Math Functions
function add() {
  let solution = placeHolder + firstOperand;
  checkNumberLength(solution);
  firstOperand = parseFloat(dispValue.value);
  placeHolder = 0;
  prevResult = firstOperand;
}

function sub() {
  let solution = placeHolder - firstOperand;
  checkNumberLength(solution);
  firstOperand = parseFloat(dispValue.value);
  placeHolder = 0;
  prevResult = firstOperand;
}

function mul() {
  let solution = placeHolder * firstOperand;
  checkNumberLength(solution);
  firstOperand = parseFloat(dispValue.value);
  placeHolder = 0;
  prevResult = firstOperand;
}

function div() {
  let solution = placeHolder / firstOperand;
  checkNumberLength(solution);
  if (firstOperand === 0) {
    alert(
      "This will take an infinitely long time... Maybe try something else."
    );
    clr();
  }
  firstOperand = parseFloat(dispValue.value);
  placeHolder = 0;
  prevResult = firstOperand;
}

let operate = () => {
  if (firstOperand && placeHolder === 0 && operatorValue === ".") {
    return;
  }

  if (operatorValue === "+") {
    add();
  } else if (operatorValue === "-") {
    sub();
  } else if (operatorValue === "*") {
    mul();
  } else if (operatorValue === "/") {
    div();
  }
};

// Disabling decimal button
decimalButton.addEventListener("click", () => {
  decimalButton.disabled = true;
});

// Fixing all Math function results greater than 9 didgits to two decimal places and appending result to display
const checkNumberLength = (num) => {
  let strNum = num.toString();
  if (strNum.length > 9) {
    dispValue.value = parseFloat(num.toFixed(4));
  } else {
    dispValue.value = parseFloat(num);
  }
  dispValueBottom.value = `Answer: ${dispValue.value}`;
};
