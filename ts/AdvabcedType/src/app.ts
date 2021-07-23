// 高度な型
// 交差型
interface Admin  {
  name: string;
  privileges: string[];
}

interface Employee  {
  name: string;
  startDate: Date;
}

// typeでもinterfaceでも書くことができる
interface EleavtedEmploee extends Admin , Employee {}
// type EleavtedEmploee = Admin & Employee;

const e1: EleavtedEmploee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
}

// union型
type Conbinable = string | number
type Numeric = number | boolean

type Universal = Conbinable & Numeric

// 型ガード
function add (a : Conbinable, b : Conbinable) {
  // このif文がtypeガードと言われる
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
type UnkownEmploee = Employee | Admin;

// 型ガード カスタム型の片方のプロパティが存在しないケース
function printEmployeeINformation(emp: UnkownEmploee) {
  console.log(emp.name)
  // カスタムオブジェクトの分岐でオブジェクトのプロパティ存在するか確認する
  if ('privileges' in emp) {
  console.log('Privileges' + emp.privileges)
  }
  if ('startDate' in emp) {
  console.log('Privileges' + emp.startDate)
  }
}

// 判別されるユニオン型
