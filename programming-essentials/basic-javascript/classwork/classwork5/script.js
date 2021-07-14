// function getFirstElement(array) {
//   return array[0];
// }

// const users = ['Alex', 'Sofia'];
// const ages = [78, 23];
// const firstUser = getFirstElement(users);
// const firstUserAge = getFirstElement(ages); 

// console.log(firstUser);
// console.log(firstUserAge);

function calculateAndAlert(a, b) {
  let result = a + b;

  alert(result);
}

function gatherDate() {
  let firstUserNumber = +prompt('Enter first number, please!');
  let secondUserNumber = +prompt('Enter second number, please!');

  return [firstUserNumber, secondUserNumber];
}

function runCalculator() {
  let numbers = gatherDate();

  calculateAndAlert(numbers[0], numbers[1]);
}



function runConverter() {
  const temperatureC = getTemperature();
  convertAndAlert(temperatureC); 
}

function getTemperature() {
  const temperatureC = +prompt('Enter temperature number')
  
  return temperatureC;
}

function convertAndAlert(temperatureC) {
  const temperatureF = temperatureC * 9 / 5 + 32;

  alert(temperatureF);
}


function getFuctorial(a) {

let result = 1;

  for (let i = 1; i <= a; i++) {
    result = result * i;
  }
  return result;
}
function runFuctorial() {
  const number = +prompt('Enter number');

  alert(getFuctorial(number));
}



function getBiggestEven(numbersList) {
  let biggestNumber = -Infinity;
  
  for (let i = 0; i < numbersList.length; i++) {
    if (numbersList[i] % 2 === 0) {
      console.log('element: ');
      console.log(numbersList[i]);
      console.log('iteration: ');
      console.log(i);

      if (numbersList[i] > biggestNumber) {
        biggestNumber = numbersList[i]; // tsar gori
      }
    }
    
  }

  return biggestNumber;
}

function runBiggestEven() {
  const numbers = prompt('Please, mister, enter numbers').split(' ');

  alert(getBiggestEven(numbers));
}