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
    age: 34,
    lastVisited: new Date("2021-07-02"),
  }
]

const outputUsers = function () {
  output.innerHTML = '';
  users.forEach(function (element, index) {
    console.log('element number ', index);
    let fullName = element.name + ' ' + element.surname;
    if (index !== users.length - 1) {
      fullName = fullName + ',\n';
    }
    output.innerHTML += fullName;
    
  } )
}


const outputSortedUsers = function () {
  const sortedUsers = users.slice().sort(function (previousUser, user) {
    console.log(previousUser, user);
    if (previousUser.name > user.name) {
      return 1;
    } 
    if (previousUser.name < user.name) {
      return -1;
    } 
    return 0;
    
  }) 
  console.log(sortedUsers);
}

const outputEmails = function () {
  output.innerHTML = '';

  const emails = users.map(function (element) {
    return element.email;
  })
  output.innerHTML = emails.join(', ');
}

const outputShortNames = function () {
  const usersShortName = users.filter(function (user) {
    if (user.name.length < 5) {
      return true;
    } else {
      return false;
    }
  })
  console.log(usersShortName);
}
