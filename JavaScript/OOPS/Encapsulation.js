// ! Without Encapsulation:
/*
class Bank {
  minimum_balance = 500;
  balance = 5000;

  getBalance() {
    return `Current Balance is : ${this.balance}`;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.balance - amount >= this.minimum_balance) {
      this.balance -= amount;
    } else {
      console.log("Error, 1. Enter Positive Amount / 2. Insuffient Balance");
    }
  }
}

let user1 = new Bank();
console.log(user1);

console.log(user1.getBalance());

user1.deposit(400); // adding 400 more

console.log(user1.getBalance());

user1.withdraw(800); // removing 800

console.log(user1.getBalance());

console.log(user1.balance); // Accessing Directly
console.log(user1.minimum_balance); // Accessing Directly

user1.balance = 500000; // ! I dont want to allow directly
user1.minimum_balance = 0; // ! I dont want to allow directly

console.log(user1.getBalance());

user1.withdraw(500000);
console.log(user1.getBalance());
*/

// ! With Encapsulation
/*
class Bank {
  #minimum_balance = 500;
  #balance = 5000;

  constructor(accountHolderName, accountNo) {
    this.accountHolderName = accountHolderName;
    this.accountNo = accountNo;

    Object.seal(this); // It will stop the adding / removing the new properties in the object.
    // It allows modifications to the existing properties
  }

  getBalance() {
    return `Current Balance is : ${this.#balance}`;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.#balance - amount >= this.#minimum_balance) {
      this.#balance -= amount;
    } else {
      console.log("Error, 1. Enter Positive Amount / 2. Insuffient Balance");
    }
  }
}

let user1 = new Bank("Ajit", 123456);
console.log(user1);
console.log(user1.getBalance());

user1.b = 500000; // New key is created
console.log(user1);
// console.log(user1.#balance);

// user1.#balance = 500000;

console.log(user1);

user1.deposit(1000);
console.log(user1.getBalance());

user1.withdraw(500);
console.log(user1.getBalance());

user1.withdraw(5200);
console.log(user1.getBalance());

user1.withdraw(-50);
console.log(user1.getBalance());
*/

// ! With GET and SET Methods
/*
class Bank {
  #minimum_balance = 500;
  #balance = 5000;

  constructor(accountHolderName, accountNo) {
    this.accountHolderName = accountHolderName;
    this.accountNo = accountNo;

    Object.seal(this); // It will stop the adding / removing the new properties in the object.
    // It allows modifications to the existing properties
  }

  get getBalance() {
    return `Current Balance is : ${this.#balance}`;
  }

  set deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  set withdraw(amount) {
    if (amount > 0 && this.#balance - amount >= this.#minimum_balance) {
      this.#balance -= amount;
    } else {
      console.log("Error, 1. Enter Positive Amount / 2. Insuffient Balance");
    }
  }
}

let user1 = new Bank("Ajit", 123456);
console.log(user1);

console.log(user1.getBalance);

user1.deposit = 5000;

console.log(user1.getBalance);

user1.withdraw = 200;

console.log(user1.getBalance);
*/

// ! Example
class Batch {
  #students = [];

  get listStudents() {
    return this.#students;
  }

  set addStudent(student) {
    // ~ A 'set' accessor must have exactly one parameter

    // check the student course belongs to MERN, JFS, PFS.
    // Show warning if not
    // try to add student from Data Analyst and check the output
    this.#students.push(student);
    console.log("New Student Added Succesfully");
  }

  get studentCount() {
    return this.#students.length;
  }
}

let reactjsBatch = new Batch();
console.log(reactjsBatch.listStudents);

reactjsBatch.addStudent = { sname: "Ritanshu", course: "JFS" };
reactjsBatch.addStudent = { sname: "Himanshu", course: "MERN" };
reactjsBatch.addStudent = { sname: "Ajit", course: "PFS" };

console.log(reactjsBatch.listStudents);
console.log(reactjsBatch.studentCount);
