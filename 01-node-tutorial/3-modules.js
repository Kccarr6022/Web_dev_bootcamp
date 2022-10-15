// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const { name, Kaden } = require("./4-names"); // always start with .
const { sayHi, sayBye } = require("./5-utils");
const data = require("./6-alternative-flavor");
const { num1, num2, addValues } = require("./7-mind-grenade");

sayHi(name);
sayHi(Kaden);
sayBye(name);
sayBye(Kaden);

function addValuesWords(num) {
  console.log(`The sum is: ${num}`);
}

addValuesWords(addValues(num1, num2));
