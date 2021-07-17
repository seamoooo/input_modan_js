"use strict";
class Department {
    constructor(name, id, employees) {
        this.employees = [];
        this.name = name;
        this.id = id;
        this.employees = employees;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEnp() {
        console.log(this.employees);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
class ITDepartment extends Department {
    constructor(id, adomin, lastReport) {
        super('IT', id, ['従業員']);
        this.adomin = adomin;
        this.lastReport = lastReport;
    }
    get mostRecentlyReport() {
        if (!this.lastReport)
            return 'no report';
        return this.lastReport;
    }
    set mostRecentlyReport(val) {
        if (!val)
            return;
        this.addReport(val);
    }
    discribe() {
        console.log('ほげ' + this.id);
    }
    addEmployeed(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.lastReport = text;
    }
}
const account = new ITDepartment(20, ['部長', '営業', '5年目'], 'hogehogereport');
account.addEmployee('max');
account.addEmployee('maxes');
account.discribe();
