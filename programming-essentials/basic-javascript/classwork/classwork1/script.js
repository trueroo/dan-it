const firstName = prompt('What is your name?');
const age = prompt('How old are you?');
const isReady = confirm('Are you ready?');
const isAngry = confirm('Are you angry?');
const isKind = confirm('Are you kind person?');
let isSly;
if (isAngry && isKind) {
  isSly = true;
} else {
  isSly = false;
}
let faculty;
if (isSly == true) {
  faculty = 'Kogtevran';
} else if (isAngry == true) {
  faculty = 'Slizerin';
} else if (isKind == true) {
  faculty = 'Pufendui';
} else {
  faculty = 'Griffindor';
} 
alert(faculty);

let finishAge;
finishAge = Number(age) + 6;
alert('You will finish school at ' + finishAge + '!');