// ! Example 1:
class Animal {
  speak() {
    return `Animal shouts load`;
  }
}

class Dog extends Animal {
  speak() {
    return `Dog Barks BOW BOW`;
  }
}

let d = new Dog();
console.log(d);
console.log(d.speak());

let a = new Animal();
console.log(a);
console.log(a.speak());

class Cat extends Animal {
  speak() {
    return `Cat shouts as Meow Meow`;
  }
}

let c = new Cat();
console.log(c);
console.log(c.speak());

// ! Example 2:
class Payment {
  pay(amount) {
    return `I am sending an amount of $${amount} through payment gateway`;
  }
}

class UPI extends Payment {
  pay(amount) {
    return `Payment processing through UPI (Phone Pe / Google Pay) : $${amount}`;
  }
}
class PayPal extends Payment {
  pay(amount) {
    return `Payment processing through Paypal : $${amount}`;
  }
}
class CreditCard extends Payment {
  pay(amount) {
    return `Payment processing through Credit Card : $${amount}`;
  }
}
class DebitCard extends Payment {
  pay(amount) {
    return `Payment processing through Debit Card : $${amount}`;
  }
}

// ? Case 1:
let p = new Payment();
console.log(p);
console.log(p.pay(1000));

let u = new UPI();
console.log(u);
console.log(u.pay(1000));

let cc = new CreditCard();
console.log(cc);
console.log(cc.pay(1000));

// ? Case 2:
let payments = [
  new Payment(),
  new UPI(),
  new PayPal(),
  new CreditCard(),
  new DebitCard(),
];
console.log(payments);

// console.log(payments[0].pay(200));
// console.log(payments[3].pay(200));

payments.forEach(payment => console.log(payment.pay(200)));

// ! Example 3:
class Message {
  send(message) {
    return `New Messaging Sending : ${message} via Main Messenger`;
  }
}

class WhatsApp extends Message {
  send(message) {
    return `New Messaging Sending : ${message} via WhatsApp`;
  }
}

class Facebook extends Message {
  send(message) {
    return `New Messaging Sending : ${message} via Facebook`;
  }
}

class Telegram extends Message {
  send(message) {
    return `New Messaging Sending : ${message} via Telegram`;
  }
}

class Tinder extends Message {
  send(message) {
    return `New Messaging Sending : ${message} via Tinder`;
  }
}

// ? Case 1:

// ? Case 2:
