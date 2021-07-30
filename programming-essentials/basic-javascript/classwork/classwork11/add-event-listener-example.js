const alertClick = function () {
  alert('Click!');
}

const consoleClick = function () {
  console.log('Click!');
}

const redSquare = document.getElementsByClassName('redSquare');

redSquare[0].addEventListener('click', alertClick);
redSquare[0].addEventListener('click', consoleClick);