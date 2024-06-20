let result = document.getElementById("result");
let expression = "";

function display(value) {
  expression += value;
  result.value = expression;
}

function clearScreen() {
  expression = "";
  result.value = expression;
}

function deleteDigit() {
  expression = expression.slice(0, -1);
  result.value = expression;
}

function calculate() {
  try {
    let answer = eval(expression);
    expression = answer;
    result.value = expression;
  } catch (error) {
    alert("Invalid Expression");
    expression = "";
    result.value = expression;
  }
}
