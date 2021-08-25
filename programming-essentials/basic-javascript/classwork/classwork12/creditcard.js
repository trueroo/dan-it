const creditCardInput = document.querySelector('.js-creditCardInput');

const ALLOWED_SYMBOLS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 


const handleInput = function (event) {
  if (!ALLOWED_SYMBOLS.includes(event.key)) {
    event.preventDefault();
    return;
  }
  
  const valueNumbers = creditCardInput.value.split('')
    .filter(function (symbol) {
      return symbol !== ' ';
    });
  console.log(valueNumbers);
  
  const isNotEmpty = valueNumbers.length !== 0;
  const isDividedByFour = valueNumbers.length % 4 === 0;
  const isNotFullInput = valueNumbers.length < 16;
  const hasSpace = creditCardInput.value[creditCardInput.value.length - 1] === ' ';

  if (isNotEmpty && isDividedByFour && isNotFullInput && !hasSpace) {
    creditCardInput.value = creditCardInput.value + ' ';
  }

  if (valueNumbers.length === 16) {
    event.preventDefault();
  }

  console.log('Input test');
  console.log(event);
}

creditCardInput.addEventListener('keypress', handleInput);