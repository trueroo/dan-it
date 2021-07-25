const user = {
  firstName: "Cthulhu",
  lastName: "Fhtagn",

  sayHi: function () {
    alert(`Hi, my name is ${this.firstName} ${this.lastName}`)
    console.log(this)
  },

  updateProperty: function (property, value) {
    if (property in user) {
      this[property] = value;
    }
  }
}

const user2 = {
  firstName: "Howard",
  lastName: "Lovecraft",
}

const gatherDataAndUpdateUser = function () {
  user.updateProperty(property.value, newValue.value)

}

const sayHi = user.sayHi;
// setTimeout(user.sayHi.bind(user2), 1000);
sayHi.call(user2)

const updateProperty = user.updateProperty
updateProperty.call(user, 'firstName', "Edgar");