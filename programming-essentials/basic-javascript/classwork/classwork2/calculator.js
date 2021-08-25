let operand1 = Number(prompt("Enter first operand"));
if (Number.isNaN(operand1) == true) {
  alert('Enter number')
  operand1 = Number(prompt("Enter first operand one more time"));
}

let sign = prompt("Enter operator");
if (sign != "+" && sign != "-" && sign != "*" && sign != "/") {
  sign = prompt("Enter sign one more time")
}

let operand2 = Number(prompt("Enter second operand"));
if (Number.isNaN(operand2) == true) {
  alert('Enter number')
  operand2 = Number(prompt("Enter second operand one more time"));
}

let result;
if (sign == "+" ) {
  result = operand1 + operand2;
} else if (sign == "-") {
  result = operand1 - operand2;
} else if (sign == "/") {
  result = operand1 / operand2;
} else if (sign == "*") {
  result = operand1 * operand2;
} else {
  alert('Enter one of next signs: "+" "-" "*" "/"')
}

alert(result);
