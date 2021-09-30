const teacherList = [];

function Teacher(firstName, lastName, id) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.element = null;
  this.id = id;
  this.list = teacherList;
  this.listElement = document.querySelector(".js-teacher-list");
}
Teacher.prototype = new Entity();

const addTeacherBtn = document.querySelector(".js-add-teacher-btn");
addTeacherBtn.addEventListener("click", function() {
  const teacherId = teacherList.length + 1;
  const teacherFirstName = document.querySelector(".js-teacher-first-name-input").value;
  const teacherLastName = document.querySelector(".js-teacher-last-name-input").value;
  const teacher = new Teacher(teacherFirstName, teacherLastName, teacherId);
  teacherList.push(teacher);
  teacher.render();
});


