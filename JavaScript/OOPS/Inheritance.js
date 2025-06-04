// ? Example 1:
/*
class ClassA {
  sname = "Rahul";
  age = 20;
}

class ClassB extends ClassA {
  course = "Node JS";
}

console.log(ClassA);
console.log(ClassB);

let b = new ClassB();
console.log(b);
*/

// ? Example2:
// level 1 - Organization
// level 2 - Department
// level 3 - Team
// level 4 - Employee

//~ level 1
/*
class Organization {
  constructor(company, location) {
    this.company = company;
    this.location = location;
  }

  describeCompany() {
    return `Company Name : ${this.company}, Location : ${this.location}`;
  }
}
*/

//~ level 2
// ? Case 1 of understanding
/*
class Department {
  constructor(deptName) {
    this.deptName = deptName;
  }

  describeDepartment() {
    return `Department Name : ${this.deptName}`;
  }
}

let dept1 = new Department("Developer");

console.log(dept1);
console.log(dept1.describeDepartment());

console.log(dept1.__proto__);
console.log(Department.prototype);

console.log(dept1.__proto__ == Department.prototype);

Department.prototype.sayHello = function () {
  return "Hii Hello How are you";
};

console.log(Department.prototype);
console.log(dept1.__proto__);

dept1.__proto__.sayBye = function () {
  return `Bye, I am leaving`;
};

console.log(Department.prototype);
console.log(dept1.__proto__);
*/

// ? Case 2 of understanding
/*
class Department extends Organization {
  constructor(deptName, company, location) {
    super(company, location);
    this.deptName = deptName;
  }

  describeDepartment() {
    return `Department Name : ${this.deptName}`;
  }
}
*/

/*
let dept1 = new Department("Developer", "TestYantra", "Banglore");
console.log(dept1);

console.log(dept1.describeDepartment());
console.log(dept1.describeCompany());
*/

// ! =======================================================================
// level 1
class Organization {
  constructor(company, location) {
    this.company = company;
    this.location = location;

    // this.company = "My own company";
  }

  describeOrganization() {
    return `Company Name : ${this.company}, Location : ${this.location}`;
  }
}

// level 2
class Department extends Organization {
  constructor(deptName, company, location) {
    super(company, location);
    this.deptName = deptName;
  }

  describeDepartment() {
    return `Department Name : ${this.deptName}`;
  }
}

// leve 3
class Team extends Department {
  constructor(teamName, techStack, deptName, company, location) {
    super(deptName, company, location);
    this.teamName = teamName;
    this.techStack = techStack;
  }

  describeTeam() {
    return `Team Name : ${this.teamName}, Tech Stack used : ${this.techStack}`;
  }
}

// level 4
class Employee extends Team {
  constructor(
    empName,
    empId,
    teamName,
    techStack,
    deptName,
    company,
    location
  ) {
    super(teamName, techStack, deptName, company, location);

    this.empName = empName;
    this.empId = empId;
  }

  describeEmployee() {
    return `Employee Name: ${this.empName}, Employee Id: ${this.empId}`;
  }
}

let emp1 = new Employee(
  "Sahil",
  123,
  "Frontend",
  ["html", "css", "js", "react js"],
  "Development",
  "Tesla",
  "US"
);

console.log(emp1);
console.log(emp1.describeEmployee());
console.log(emp1.describeTeam());
console.log(emp1.describeDepartment());
console.log(emp1.describeOrganization()); // emp1 ---> Employee ---> Team ---> Department ---> Organization
