import TypeAlias from "./TypeAlias";
import Enum from "./Enum";
class Department {
  /**private 이란 employees가 클래스 즉 생성된 객체 내부에서만 접근할수 있는 속성으로 만들어준다. 다시말해 외부에서 직접적으로 접근이 불가 ex)accounting.employees[2]="Anna" < 불가능 */
  /**protected 란 상속받은 클래스에서 기존클래스의 속성을 사용하고자할때 기존클래스의 속성이 private 라면 사용하지못한다. 외부에선 접근불가하고 상송받은곳에서 사용하려면 protected 를 사용해야한다. */
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  countEmployees() {
    console.log("totalEmployees", this.employees.length);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}
const it = new ITDepartment("D1", ["Max"]);
it.describe();
it.addEmployee("최민수");
it.addEmployee("이혜린");
it.countEmployees();
console.log(it);

class AccountingDepartment extends Department {
  private lastReport: string;
  /**getter 는 반드시 return이 있어야한다. */
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}
const accounting = new AccountingDepartment("A1", []);
accounting.addReport("보고서 입니다.");
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "보고서 입니다2";
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

console.log(accounting);
function App() {
  return (
    <div className="flex flex-col text-3xl justify-center items-center font-bold">
      <Enum />
      <TypeAlias />
    </div>
  );
}

export default App;
