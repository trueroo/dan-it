let year;
do {
  year = +prompt('Please, enter year');
} while (Number.isNaN(year) == true);

if (year % 100 === 0) {
  alert(`${year / 100 + 1} century`);
}
let isCentury = year % 100 === 0;
if (year % 4 === 0 && !isCentury) {
  alert('This is a leap year');
}
