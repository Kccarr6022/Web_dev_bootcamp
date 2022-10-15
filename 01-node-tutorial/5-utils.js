const sayHi =  (name) => {
    console.log(`Hello there ${name}`);
}

const sayBye = (name) => {
    console.log(`bye ${name}`);
}

module.exports = {sayHi, sayBye}; // for the command const {sayHi, sayBye} = require('./5-utils');