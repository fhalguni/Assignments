enum Role {
  Manager,
  Developer,
  Designer,
  Tester,
  HR,
}

interface Employee {
  id: number;
  name: string;
  role: Role;
  salary: number;
  isActive: boolean;
}

class Company {
  private emp: Employee[] = [];
  addEmployee(employee: Employee): void {
    if (this.emp.some((e) => e.id === employee.id)) {
      console.log("Employee already exist");
      return;
    }
    this.emp.push(employee);
    console.log(`${employee.name} added successfully`);
  }

  listAllEmployee(): void {
    this.emp.forEach((e) => {
      console.log(
        `ID:${e.id}, name:${e.name}, role:${Role[e.role]}, salary:${
          e.salary
        }, isActive:${e.isActive}`
      );
    });
  }

  searchByStatus(status: boolean): Employee[] {
    let arr: Employee[] = [];
    const result = this.emp.filter((e) => e.isActive === status);
    if (!result) {
      console.log("No any employee found by this status");
    }

    this.emp.forEach((e) => {
      if (e.isActive === status) {
        arr.push(e);
      }
    });
    return arr;
  }

  searchByRole(role: Role): Employee[] {
    let arr: Employee[] = [];
    const result = this.emp.filter((e) => e.role === role);
    if (!result) {
      console.log("No any employee found by this role");
    }

    this.emp.forEach((e) => {
      if (e.role === role) {
        arr.push(e);
      }
    });
    return arr;
  }

  updateEmployeeStatus(id: number, status: boolean): void {
    let result = this.emp.filter((e) => e.id === id);
    if (!result) {
      console.log("No employee found");
      return;
    }
    this.emp.forEach((e) => {
      if (e.id === id) {
        e.isActive = status;
        console.log(`${e.name} Employee status updated to ${e.isActive}`);
      }
    });
  }

  calculateTotalSalary(): number {
    let salary = 0;
    this.emp.forEach((e) => {
      if (e.isActive === true) {
        salary = salary + e.salary;
      }
    });
    return salary;
  }
}
const company = new Company();

let emp1: Employee = {
  id: 1,
  name: "Ashwini",
  role: Role.Developer,
  salary: 500000,
  isActive: false,
};

let emp2: Employee = {
  id: 2,
  name: "abcd",
  role: Role.HR,
  salary: 500000,
  isActive: true,
};

let emp3: Employee = {
  id: 3,
  name: "pqrs",
  role: Role.Developer,
  salary: 600000,
  isActive: true,
};

let emp4: Employee = {
  id: 4,
  name: "xyz",
  role: Role.Manager,
  salary: 600000,
  isActive: true,
};

let emp5: Employee = {
  id: 5,
  name: "mno",
  role: Role.Tester,
  salary: 600000,
  isActive: true,
};

company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);
company.addEmployee(emp4);
company.addEmployee(emp5);

company.listAllEmployee();

const searchRole = company.searchByRole(Role.Developer);
const searchStatus = company.searchByStatus(true);
company.updateEmployeeStatus(1, true);
// console.log(searchRole);
// console.log(searchStatus);
company.listAllEmployee();
console.log(company.calculateTotalSalary());
