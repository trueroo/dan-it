let operand1 = Number(prompt("Enter first operand") || 1);
if (Number.isNaN(operand1) == true) {
  alert('Enter number')
  operand1 = Number(prompt("Enter first operand one more time"));
}

let sign = prompt("Enter operator");
sign = sign === '' ? '+' : sign;

if (sign != "+" && sign != "-" && sign != "*" && sign != "/") {
  sign = prompt("Enter sign one more time")
}

let operand2 = Number(prompt("Enter second operand") || 1);
if (Number.isNaN(operand2) == true) {
  alert('Enter number')
  operand2 = Number(prompt("Enter second operand one more time"));
}

switch (sign) {
  case '+':
    result = operand1 + operand2;
    break;
  case '-':
    result = operand1 - operand2;
    break;
  case '/':
    result = operand1 / operand2;
    break;
  case '*':
    result = operand1 * operand2;
    break;
  default:
    alert('Enter one of next signs: "+" "-" "*" "/"');
}
alert(result);