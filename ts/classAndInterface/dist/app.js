"use strict";
class Department {
    constructor(name, id, employees) {
        this.employees = [];
        this.name = name;
        this.id = id;
        this.employees = employees;
    }
    discribe() {
        console.log('Department' + this.name + this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEnp() {
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, adomin) {
        super('IT', id, ['従業員']);
        this.adomin = adomin;
    }
    addEmployeed(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}
const account = new Department('account', 13, ['部長', '営業', '5年目']);
account.addEmployee('max');
account.addEmployee('maxes');
account.discribe();
