const users = [
  {
    name: 'John',
    surname: 'Dou',
    email: 'john_doe@noname.com',
    age: 42,
    lastVisited: new Date("2021-07-01"),
  },
  {
    name: 'Gianluigi',
    surname: 'Donnarumma',
    email: 'gianluigi@psg.com',
    age: 22,
    lastVisited: new Date("2021-05-01"),
  },
  {
    name: 'Andy',
    surname: 'Murray',
    email: 'andymurray@murray.com',
    age: 31,
    lastVisited: new Date("2021-07-02"),
  }
];

const map = function (originalArray, func) {
  const newArray = [];
  for (let i = 0; i < originalArray.length; i++) {
    const currentValue = originalArray[i];
    const modifiedUser = func(currentValue);
    newArray.push(modifiedUser);
  }

  return newArray;
}


const usersWithFullNameCustom = map(users, function(user) {
  user.fullName = user.name + ' ' + user.surname;
  
  return user;
});

const addFullNameToUser = function(user) {
  user.fullName = user.name + ' ' + user.surname;
  
  return user;
};

const usersWithFullName = users.map(addFullNameToUser);
