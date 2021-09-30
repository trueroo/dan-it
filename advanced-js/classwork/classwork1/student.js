const studentList = [];

function Student(firstName, lastName, id) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.element = null;
  this.id = id;
  this.list = studentList;
  this.listElement = document.querySelector(".js-student-list");
}
Student.prototype = new Entity();

const addStudentBtn = document.querySelector(".js-add-student-btn");
addStudentBtn.addEventListener("click", function() {
  const studentId = studentList.length + 1;
  const studentFirstName = document.querySelector(".js-student-first-name-input").value;
  const studentLastName = document.querySelector(".js-student-last-name-input").value;
  const student = new Student(studentFirstName, studentLastName, studentId);
  studentList.push(student);
  student.render();
});