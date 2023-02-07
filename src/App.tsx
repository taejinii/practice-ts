import TypeAlias from "./TypeAlias";
import Enum from "./Enum";
class Department {
  name: string;
  /**private 이란 employees가 클래스 즉 생성된 객체 내부에서만 접근할수 있는 속성으로 만들어준다. 다시말해 외부에서 직접적으로 접근이 불가 ex)accounting.employees[2]="Anna" < 불가능 */
  private employees: string[] = [];
  constructor(name: string) {
    this.name = name;
  }
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  countEmployees() {
    console.log("employees.length", this.employees.length);
    console.log(this.employees);
  }
}
const accounting = new Department("Accounting");
accounting.describe();
accounting.addEmployee("최민수");
accounting.addEmployee("이혜린");
accounting.countEmployees();

function App() {
  return (
    <div className="flex flex-col text-3xl justify-center items-center font-bold">
      <Enum />
      <TypeAlias />
    </div>
  );
}

export default App;
