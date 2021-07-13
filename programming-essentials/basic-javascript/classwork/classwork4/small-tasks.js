'use strict';

const INITIAL_STATE = 100;
for (let i = INITIAL_STATE; i >= 0; i--) {
  if (i % 5 === 0) {
    console.log(i);
  }
}



let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum = sum + i; 
}
console.log(sum);



let num; // i = 0.95
let count = 0;
do {
  num = Math.random();
  count++;
  console.log('Number: ' + num);
  console.log('Count: ' + count);
 } while (num < 0.9 && count < 7);

 console.log(num); 



  let num;
 for (let count = 0; count <= 7; count++) {
  num = Math.random();
  if (num > 0.9) {
    break;
  } console.log(count);
 }
 console.log(num);




 for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    console.log(i);
  }
}



const users = ['Bob', 'Jack', 'Darina', 'Poll'];
for (const userFirstName of users) {
  if (userFirstName.length < 5) {
    console.log(userFirstName);
  }
}