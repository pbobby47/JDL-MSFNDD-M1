// ! Example 1:
/*!
class Car {
  #engine = false;

  #startEngine() {
    console.log("Starting Engine Process 1");
    console.log("Starting Engine Process 2");
    console.log("Starting Engine Process 3");
    console.log("Starting Engine Process ....");
    console.log("Starting Engine Process N");

    this.#engine = true;
    console.log("Car Started");
  }

  #stopEngine() {
    console.log("Stopping Engine");
    this.#engine = false;
  }

  // public method
  startCar() {
    console.log("Starting the car");
    this.#startEngine();
  }

  stopCar() {
    console.log("Stopping the car");
    this.#stopEngine();
  }
}

let c = new Car();
console.log(c);

c.startCar();
c.stopCar();
*/

// ! Example 2:
class MongoDB {
  #connection = false;

  #connectToMongoCluster() {
    console.log("Connecting to MongoDB");
    console.log("Connecting to MongoDB Atlas");
    console.log("Connecting to Cluster");
    console.log("Connecting to Database");
    this.#connection = true;
    console.log("db Connected Successfully");
  }

  connect() {
    console.log("I will connect to the mongoDB cluster");
    this.#connectToMongoCluster();
  }

  find(collection, query) {
    if (!this.#connection) {
      console.log("✖️ Please connect to Mongo DB Clustor");
    } else {
      console.log(
        `Heyy, I am retreving the documents from the ${collection} collection with the query filter ${query}`
      );
    }
  }

  insertOne(collection, document) {
    if (!this.#connection) {
      console.log("✖️ Please connect to Mongo DB Clustor");
    } else {
      console.log(
        `Heyy, I am inserting the ${document} document to the ${collection} collection `
      );
    }
  }
}

let db = new MongoDB();

console.log(db);

db.insertOne("user", { name: "Sahil", age: 21, course: "Node JS" });

// db.connect();

db.insertOne("user", { name: "Sahil", age: 21, course: "Node JS" });

db.find("user", { name: "Sahil" });

db.connect();

db.find("user", { name: "Sahil" });
