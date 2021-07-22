// const user = {
//   firstName: 'Leo',
//   lastName: 'Da Vinci',
//   job: 'Full Stack',

//   sayHi: function() {
//     console.log('Hi!');
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
//   }
// }
// user.sayHi();

const students = [];
const graduatedStudents = [];
const notGraduatedStudents = [];

const addUser = function () {
 const firstName = firstNameInput.value;
 const lastName = lastNameInput.value;
 const grade = gradeInput.value;
 const job = jobInput.value;

  const user = {
    firstName,
    lastName,
    grade,
    job,
  };


  students.push(user);

  console.log(students);
}

const chekWhoGraduated = function () {
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade < 6) {
      notGraduatedStudents.push(students[i]);
    } else {
      graduatedStudents.push(students[i]);
    }
  }
  let studentsNames = '';
  for (let student of graduatedStudents) {
    studentsNames = studentsNames + student.firstName + ' ' + student.lastName + ','; 
  }
  graduatedStudentsList.innerHTML = studentsNames;
}

