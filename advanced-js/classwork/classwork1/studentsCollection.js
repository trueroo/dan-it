const studentList = [];

function StudentsCollection () {
  this.addStudent = function () {
    const studentId = studentList.length + 1;
    const studentFirstName = document.querySelector(".js-student-first-name-input").value;
    const studentLastName = document.querySelector(".js-student-last-name-input").value;
    const student = new Student(studentFirstName, studentLastName, studentId);
    studentList.push(student);
    student.render();
    this.syncCollection();
  }
  this.syncCollection = function () {
    localStorage.setItem('studentsCollection', JSON.stringify({ studentList }));
  }
  this.getCollection = function () {
    try {
      const collectionFromLS = JSON.parse(localStorage.getItem('studentsCollection'));
      collectionFromLS.studentList.forEach(element => {
        const studentFirstName = element.firstName;
        const studentLastName = element.lastName;
        const studentId = element.id;
        const student = new Student(studentFirstName, studentLastName, studentId);
  
        studentList.push(student);
        student.render();
      });
    } catch (error) {
      console.log(error);
    }
  }
  this.removeById = function (id) {
    const selfIndex = studentList.findIndex((person) => {
      return person.id === id;
    });
    studentList.splice(selfIndex, 1);
    this.syncCollection();
  }
}

const studentsCollection = new StudentsCollection();
studentsCollection.getCollection();

const addStudentBtn = document.querySelector(".js-add-student-btn");
addStudentBtn.addEventListener("click", studentsCollection.addStudent.bind(studentsCollection));