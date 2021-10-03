function Student(firstName, lastName, id) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.element = null;
  this.id = id;
  this.listElement = document.querySelector(".js-student-list");
  this.collection = studentsCollection;
}
Student.prototype = new Entity();
