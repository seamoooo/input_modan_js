"use strict";
const printNumber = output => {
    console.log(output);
};
printNumber('hoge');
const add = (a, b = 1) => a + b;
printNumber(add(2));
const hobbies = ['cooking', 'swim', 'food'];
const activateHobboes = ['Hiking'];
activateHobboes.push(...hobbies);
