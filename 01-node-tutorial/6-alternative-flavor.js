module.exports.items = ['item1', 'item2'];
const person = { // object
    name: 'bob'
}

module.exports.singlePerson = person; // export object - > for command: const {singlePerson} = require('./6-alternative-flavor');