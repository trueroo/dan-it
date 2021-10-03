function Teacher(firstName, lastName, id) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.element = null;
  this.id = id;
  this.listElement = document.querySelector(".js-teacher-list");
  this.collection = teachersCollection;
}
Teacher.prototype = new Entity();
