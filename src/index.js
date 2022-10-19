const core = require('@actions/core');

const person = core.getInput('person');

console.log(`Hello ${person}!`);
