function BaseCollection () {
  this.addPerson = function () {
    const personId = this.list.length + 1;
    const personFirstName = this.firstNameElement.value;
    const personLastName = this.lastNameElement.value;

    const person = new this.PersonConstructor(personFirstName, personLastName, personId);
    this.list.push(person);
    person.render();
    this.syncCollection();
  }
  
  this.syncCollection = function () {
    const personeListToSave = this.list.map((person) => {
      const firstName = person.firstName;
      const lastName = person.lastName;
      const id = person.id;

      return { firstName, lastName, id };
    });

    localStorage.setItem(this.localStorageKey, JSON.stringify({ 
      list: personeListToSave
    }));
  }
  this.getCollection = function () {
    try {
      const collectionFromLS = JSON.parse(localStorage.getItem(this.localStorageKey));
      collectionFromLS.list.forEach(element => {
        const firstName = element.firstName;
        const lastName = element.lastName;
        const id = element.id;
        const person = new this.PersonConstructor(firstName, lastName, id);
        this.list.push(person);
        person.render();
      });
    } catch (error) {
      console.log(error);
    }
  }

  this.removeById = function (id) {
    const selfIndex = this.list.findIndex((person) => {
      return person.id === id;
    });
    this.list.splice(selfIndex, 1);
    this.syncCollection();
  }
}