console.log(Symbol("id"));
console.log(Symbol("id") === Symbol("id"));

var admin_id = Symbol("_id");
var user_id = Symbol("_id");

var sym1 = Symbol("unique_key_1");
var sym2 = Symbol("unique_key_2");

var obj = {
  [admin_id]: 123,
  [user_id]: 456,
  name: "Manav",
  age: 20,
  course: "Node JS",
};
console.log(obj);
console.log(obj[admin_id]);
console.log(obj[user_id]);

for (let key in obj) {
  console.log(key);
}

/* //! Note:
1. Symbol is a primitive datatype
2. Symbol helps us to create unique, even the description is same.
3. Symbol mostly we will use to create unique key's in an object. 
4. to use Symbol keys Ex: [sym1], [sym2]
5. Symbol key's cannot be iterrable.
*/
