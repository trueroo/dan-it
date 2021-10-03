const teacherList = [];

function TeachersCollection () {
  this.addTeacher = function () {
    const teacherId = teacherList.length + 1;
    const teacherFirstName = document.querySelector(".js-teacher-first-name-input").value;
    const teacherLastName = document.querySelector(".js-teacher-last-name-input").value;
    const teacher = new Teacher(teacherFirstName, teacherLastName, teacherId);
    teacherList.push(teacher);
    teacher.render();
    this.syncCollection();
  }
  this.syncCollection = function () {
    const teacherListToSave = teacherList.map((teacher) => {
      const firstName = teacher.firstName;
      const lastName = teacher.lastName;
      const id = teacher.id;

      return { firstName, lastName, id };
    });

    localStorage.setItem('teachersCollection', JSON.stringify({ 
      teacherList: teacherListToSave
    }));
  }
  this.getCollection = function () {
    try {
      const collectionFromLS = JSON.parse(localStorage.getItem('teachersCollection'));
      collectionFromLS.teacherList.forEach(element => {
        const teacherFirstName = element.firstName;
        const teacherLastName = element.lastName;
        const teacherId = element.id;
        const teacher = new Teacher(teacherFirstName, teacherLastName, teacherId);
  
        teacherList.push(teacher);
        teacher.render();
      });
    } catch (error) {
      console.log(error);
    }
  }
  this.removeById = function (id) {
    const selfIndex = teacherList.findIndex((person) => {
      return person.id === id;
    });
    teacherList.splice(selfIndex, 1);
    this.syncCollection();
  }
}

const teachersCollection = new TeachersCollection();
teachersCollection.getCollection();

const addTeacherBtn = document.querySelector(".js-add-teacher-btn");
addTeacherBtn.addEventListener("click", teachersCollection.addTeacher.bind(teachersCollection));