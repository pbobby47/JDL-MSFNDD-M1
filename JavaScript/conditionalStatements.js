// ! Conditional Statements
/*
    --- if statement
    --- if - else
    --- if - else if
    --- switch case
    --- nested if
*/
/*
// ? if statement:
console.log("start");
var age = 21;
if (age >= 18) {
  console.log("Hey, You are eligible for voting");
}

var age = 15;
if (age >= 18) {
  console.log("Hey, You are eligible for voting");
}

console.log("start");

// ? if else:
console.log("start");
var age = 15;

if (age >= 18) {
  console.log("Hey, You are eligible for voting");
} else {
  console.log(`Sorry, come after ${18 - age} year(s)`);
}
console.log("end");

// ? else if ladder:
var mernCourse = ["mongodb", "express js", "react js", "node js"];
var pythonCourse = ["python", "sql", "Django", "web"];
var javaCourse = ["java", "sql", "Spring", "web"];

var course = prompt("Enter Your Course");

if (course === "mern") {
  console.log("you can attend these classes -1", mernCourse);
} else if (course === "java") {
  console.log("you can attend these classes", javaCourse);
} else if (course === "python") {
  console.log("you can attend these classes", pythonCourse);
} else if (course === "mern") {
  console.log("you can attend these classes -2", mernCourse);
} else {
  console.log("You have enroll here first");
}

// ? nested if:
var data = { courseType: "dev", course: "mern" };
var data = { courseType: "testing", course: "automation" };

if (data.courseType == "dev") {
  if (data.course === "mern") {
    console.log("Welcome to Mern stack");
  } else if (data.course === "java") {
    console.log("Welcome to java course");
  } else if (data.course === "python") {
    console.log("Welcome to python course");
  } else {
    console.log("Please the course out of mern / java / python");
  }
} else if (data.courseType == "testing") {
  // manual
  // automation
  console.log("testing block");
} else {
  console.log("Please choose either dev or testing");
}

// ? switch case:
var day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday again");
    break;
  default:
    console.log("choose b/w 1 to 7");
}

// ? switch example 2:
var counter = 0;

function updateCounter(data) {
  switch (data) {
    case "increment":
      counter += 1;
      console.log(counter);
      break;
    case "decrement":
      counter -= 1;
      console.log(counter);
      break;
    case "reset":
      counter = 0;
      console.log(counter);
      break;
  }
}

console.log("initial value", counter);
updateCounter("increment");
updateCounter("increment");
updateCounter("increment");
updateCounter("decrement");
updateCounter("reset");

// ? switch example 3:
var counter = { count: 0 };

function updateCounter(data) {
  console.log(data.type);
  switch (data.type) {
    case "increment":
      counter.count += 1;
      console.log(counter);
      break;
    case "decrement":
      counter.count -= 1;
      console.log(counter);
      break;
    case "reset":
      counter.count = 0;
      console.log(counter);
      break;
    default:
      console.log("type is not matching");
  }
}

console.log("initial value", counter);
updateCounter({ type: "increment" });
updateCounter({ type: "increment" });
updateCounter({ type: "decrement" });
updateCounter({ type: "reset" });
*/
// ? switch case Example 4:
var counter = { count: 0 };

function updateCounter(action) {
  switch (action.type) {
    case "increment":
      counter.count += action.number;
      console.log(counter);
      break;
    case "decrement":
      counter.count -= action.number;
      console.log(counter);
      break;
    case "reset":
      counter.count = 0;
      console.log(counter);
      break;
    default:
      console.log("Counter type is not matched");
  }
}

console.log("Initial Counter - ", counter);
updateCounter({ type: "increment", number: 10 });
updateCounter({ type: "increment", number: 5 });
updateCounter({ type: "decrement", number: 5 });
updateCounter({ type: "decrement", number: 3 });
updateCounter({ type: "reset" });
