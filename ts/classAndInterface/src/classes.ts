// abstractクラスはnewできない
abstract class Department {
  name: string;
  // 継承もとではオーバライドできる
  protected employees: string[] = [];
  // readonlyで変更不能にしてれる
  protected readonly id: number;

  //  初期化
  constructor(name: string, id: number, employees: string[]) {
    this.name = name;
    this.id = id;
    this.employees = employees;
  }

  //  初期化の省略記法　型宣言とプロパティの代入を省略
  // constructor(public name: string, private employees: string){}

  // thisの型をメソッドで宣言することにより型安全になる
　//　抽象のメソッドのみを定義して、継承先で実装を強制する 
  abstract discribe(this: Department):void; 
  // {console.log('Department' + this.name + this.id)}
  

  addEmployee(employee:string) {
    // validate etc
    this.employees.push(employee)
  }

  printEnp() {
    console.log(this.employees)
  }

 //newを使用しなくても、namespaceのような形でアクセスできる
 // staricじゃないところからアクセスできない,インスタンスと切り離して存在する
 static createEmployee(name: string) {
  return { name: name }
  }
}

// 継承
// 継承もとのプロパティとメソッドを引き継ぐ
class ITDepartment extends Department {
  adomin:string[]
  private lastReport:string;

  constructor(id: number, adomin: string[], lastReport:string) {
    // 軽傷元のプロパティを継承
    super('IT', id, ['従業員'])
    this.adomin = adomin
    this.lastReport = lastReport
  }

  // ゲッター、カプセル化
  get mostRecentlyReport() {
    if(!this.lastReport) return 'no report'
    return this.lastReport;
  }

  // setter　クラス.メソッド名でプロパティのようにアクセス
  set mostRecentlyReport(val:string) {
    if(!val) return;
    this.addReport(val)
  }

  // class 'ITDepartment' does not implement inherited abstract 
  //member 'discribe' from class 'Department'.ts
  discribe() {
    console.log('ほげ' + this.id)
  }

  addEmployeed(name:string) {
    if (name === 'Max') {
      return;
    }
    // 継承元で宣言をprotectedにする
    this.employees.push(name)
  }

  addReport(text:string) {
    this.lastReport = text
  }
  
}

const account = new ITDepartment(20 , ['部長','営業', '5年目'], 'hogehogereport');
account.addEmployee('max');
account.addEmployee('maxes');
account.discribe();

// 外部から上書きされるのを防ぐ必要がある(private)
// account.employees[4] = 'anna'

// クラスの保持しているプロパティと合わせるとエラーが出なく、型チェックが透
// const accountCopy = {name: 'Dummy', discribe: account.discribe}
// accountCopy.discribe()