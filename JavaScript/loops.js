// !  While Loop
// WAP to print "Hii Manav" for 10 times.
let i = 0;

while (i < 10) {
  console.log("Hii Manav -", i);
  i++;
}

// WAP to print even numbers till 20.
let i = 0;

while (i <= 20) {
  if (i % 2 === 0) {
    console.log("even number is -", i);
  }
  i++;
}

// !  For Loop
// WAP to print odd numbers till 20.
for (let i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// ! ===== break , continue =====
// break, Stop the execution and it will move to exit.
// continue , it will skip the iteration and move to the next iteration.

// ? Example 1:
// WAP to print number till 10 and stop when we match 5.
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

// ? Example 2:
// WAP to print number till 10 and skip when we match 5 , 6, 8.
for (let i = 1; i <= 10; i++) {
  if (i == 5 || i == 6 || i == 8) {
    continue;
  }
  console.log(i);
}

// ? Example 3:
// input: manav,rahul,ajit
// output: mnv,rhl,ajt
// hint: skips vowels
let input = "manav,rahul,ajit";
let output = "";

for (let i = 0; i < input.length; i++) {
  if (
    input[i] == "a" ||
    input[i] == "e" ||
    input[i] == "i" ||
    input[i] == "o" ||
    input[i] == "u"
  ) {
    continue;
  }

  output += input[i];
}
console.log(output);

// ? Example 4:
var obj = [
  {
    sname: "Manav",
    role: "admin",
    experience: 2,
  },
  {
    sname: "Rahul",
    role: "user",
    experience: 1,
  },
  {
    sname: "Ajit",
    role: "guest",
    experience: 0,
  },
];

// print admin details
// print the persons details who has more or equal to 1 years of experience.

// ? Example 5:
var obj = [
  {
    task: "work 1",
    status: "success",
  },
  {
    task: "work 2",
    status: "success",
  },
  {
    task: "work 3",
    status: "pending",
  },
  {
    task: "work 4",
    status: "fail",
  },
  {
    task: "work 5",
    status: "pending",
  },
];

// WAP to list all the successful tasks
// WAP to list all the pending tasks
// WAP to list all the failure tasks
