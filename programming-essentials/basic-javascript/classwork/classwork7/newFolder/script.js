const getWeekDay = function () {
  let currentDate = new Date();
  const ONE_DAY = 1000 * 60 * 60 * 24;
  let daysAgo = ONE_DAY * daysInput.value;
  let usersDateMilliseconds = currentDate - daysAgo;
  const usersDate = new Date(usersDateMilliseconds)
  alert(usersDate.getDay());
}