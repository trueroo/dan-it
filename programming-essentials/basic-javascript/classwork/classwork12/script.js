
const days = [3, 4, 5, 6, 7];
// const daysColors = ["red", "red", "red", "green", "blue"];
// const daysColorsWeekend = ["green", "blue"];


const daysColors = days.map(function (dayNumber) {
  let dayColor;
  if (dayNumber < 6) {
    dayColor = "red";
  } else if (dayNumber === 6) {
    dayColor = "green";
  } else {
    dayColor = "blue";
  }

  return dayColor;
});

const daysColorsWeekend = daysColors.filter(function (dayColor) {
  if (dayColor === "red") {
    return false;
  }

  return true;
});

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

const allowedUsers = users.map(function (user) {
  const newUser = { ...user };
  if (user.age < 30) {
    newUser.isAllowed = false;
  } else {
    newUser.isAllowed = true;
  }
  return newUser;
});
