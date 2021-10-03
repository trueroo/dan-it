function Teacher(firstName, lastName, id) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.element = null;
  this.id = id;
  // this.list = teacherList;
  this.listElement = document.querySelector(".js-teacher-list");

  this.remove = function() {
    this.element.remove();
    teachersCollection.removeTeacher(this.id);
  }

  this.render = function() {
    const listItem = document.createElement("li");
    listItem.innerHTML = this.firstName + ' ' + this.lastName;
    this.listElement.appendChild(listItem);
    this.element = listItem;

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Delete";
    listItem.appendChild(removeBtn);

    removeBtn.addEventListener("click", this.remove.bind(this));
  }
}
// Teacher.prototype = new Entity();
