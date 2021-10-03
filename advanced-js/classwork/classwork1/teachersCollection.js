const teacherList = [];

function TeachersCollection () {
  this.list = teacherList;
  this.firstNameElement = document.querySelector(".js-teacher-first-name-input");
  this.lastNameElement = document.querySelector(".js-teacher-last-name-input");
  this.PersonConstructor = Teacher;
  this.localStorageKey = 'teachersCollection';


}
TeachersCollection.prototype = new BaseCollection();

const teachersCollection = new TeachersCollection();
teachersCollection.getCollection();

const addTeacherBtn = document.querySelector(".js-add-teacher-btn");
addTeacherBtn.addEventListener("click", teachersCollection.addPerson.bind(teachersCollection));
