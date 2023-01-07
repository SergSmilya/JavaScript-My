function consoleLoger() {
  console.log("Hello world");
}

function alertLoger() {
  alert("function setTimeout");
}

// ? Timer & Interval

// * setTimeout
const timerId = setTimeout(alertLoger, 3000);
console.log(timerId);

// ! clearTimeout
// clearTimeout(timerId);

// * setInterval
const intervalId = setInterval(consoleLoger, 500);
console.log(intervalId);

// ! clearInterval
clearInterval(intervalId);

// ***

// ? Class DATE

// * DATE
const date = new Date();
console.log(date);

// * Unix
console.log(date.getTime());

// * Add date
const teamMeetingDate = new Date("March 16, 2023");
console.log(teamMeetingDate);

// * get
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());

// * set
// console.log(date.setMinutes(50));
// console.log(date.setFullYear(2040, 4, 8));

// * formatDate
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
