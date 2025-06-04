// ! Here we are exploring more about prototype and __proto___
var s1 = {
  data1: "I am data1 from s1",
};

console.log(s1);

console.log(s1.hasOwnProperty("data1"));

var Student1 = {
  course1: "MERN Stack",
  name: "Sahil",
  getName() {
    return `I am ${this.name}`;
  },
};

var Student2 = {
  course2: "JFS Course",
  name: "Manav",
  __proto__: Student1,
};

// Student2.__proto__ = Student1;

console.log(Student1);
console.log(Student2);

// ? Example 2:
console.log("=== Example 2 ===");

// level 1:
var Organization = {
  companyName: "TestYantra",
  location: "Banglore",
  describeOrganization() {
    return `Company Name : ${this.companyName}, location: ${this.location}`;
  },
};

// level 2:
var Department = {
  departmentName: "Developement",
  describeDepartment() {
    return `Department Name: ${this.departmentName}`;
  },
  __proto__: Organization,
};

// level 3:
var Team = {
  teamName: "Frontend Team",
  techStacK: ["html", "css", "js", "react js"],
  describeTeam() {
    return `
    Team Name : ${this.teamName}, 
    Tech Stack : ${this.techStacK.join(",")}
    `;
  },
  __proto__: Department,
};

// level 4:
var Employee = {
  empName: "Sahil",
  empId: 123,
  describeEmployee() {
    return `I am ${this.empName}, my empId is ${this.empId}`;
  },
  __proto__: Team,
};

var Employee = {
  empName: "Sahil",
  empId: 123,
  describeEmployee() {
    return `I am ${this.empName}, my empId is ${this.empId}`;
  },
  __proto__: Team,
};

console.log(Employee);
console.log(Employee.describeEmployee()); // leve 4
console.log(Employee.describeTeam()); // leve 3
console.log(Employee.describeDepartment()); // leve 2
console.log(Employee.describeOrganization()); // leve 1

/*
---> to get this Employee.describeOrganization()

1. Employee
2. Employee.__proto__ = Team
3. Team__proto__ = Department
4. Department.__proto__ = Organization
*/
