class Department {
  name: string;
  // 継承もとではオーバライドできる
  protected employees: string[] = [];
  // readonlyで変更不能にしてれる
  private readonly id: number;

  //  初期化
  constructor(name: string, id: number, employees: string[]) {
    this.name = name;
    this.id = id;
    this.employees = employees;
  }

  //  初期化の省略記法　型宣言とプロパティの代入を省略
  // constructor(public name: string, private employees: string){}

  // thisの型をメソッドで宣言することにより型安全になる
  discribe(this: Department) {
    console.log('Department' + this.name + this.id)
  }

  addEmployee(employee:string) {
    // validate etc
    this.employees.push(employee)
  }

  printEnp() {
    console.log(this.employees)
  }
}

// 継承
// 継承もとのプロパティとメソッドを引き継ぐ
class ITDepartment extends Department {
  adomin:string[]
  constructor(id: number, adomin: string[]) {
    // 軽傷元のプロパティを継承
    super('IT', id, ['従業員'])
    this.adomin = adomin
  }

  addEmployeed(name:string) {
    if (name === 'Max') {
      return;
    }
    // 継承元で宣言をprotectedにする
    this.employees.push(name)
  }
}

const account = new Department('account' , 13, ['部長','営業', '5年目']);
account.addEmployee('max');
account.addEmployee('maxes');
account.discribe();

// 外部から上書きされるのを防ぐ必要がある(private)
// account.employees[4] = 'anna'

// クラスの保持しているプロパティと合わせるとエラーが出なく、型チェックが透
// const accountCopy = {name: 'Dummy', discribe: account.discribe}
// accountCopy.discribe()