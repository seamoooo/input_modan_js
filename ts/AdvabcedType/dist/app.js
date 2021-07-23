"use strict";
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeINformation(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log('Privileges' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Privileges' + emp.startDate);
    }
}
