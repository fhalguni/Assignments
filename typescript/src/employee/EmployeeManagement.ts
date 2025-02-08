enum EmpRole {
  Manager = "Manager",
  Developer = "Developer",
  Intern = "Intern",
}

interface EmployeeData {
  Id: number;
  name: string;
  email: string;
  erole: EmpRole;
  status: boolean;
}

const employees: EmployeeData[] = [
  {
    Id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    erole: EmpRole.Manager,
    status: true,
  },
  {
    Id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    erole: EmpRole.Developer,
    status: true,
  },
  {
    Id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    erole: EmpRole.Intern,
    status: false,
  },
  {
    Id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    erole: EmpRole.Manager,
    status: true,
  },
  {
    Id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    erole: EmpRole.Developer,
    status: false,
  },
  {
    Id: 6,
    name: "Dana White",
    email: "dana.white@example.com",
    erole: EmpRole.Intern,
    status: true,
  },
  {
    Id: 7,
    name: "Eve Black",
    email: "eve.black@example.com",
    erole: EmpRole.Developer,
    status: true,
  },
  {
    Id: 8,
    name: "Frank Green",
    email: "frank.green@example.com",
    erole: EmpRole.Manager,
    status: false,
  },
  {
    Id: 9,
    name: "Grace Blue",
    email: "grace.blue@example.com",
    erole: EmpRole.Intern,
    status: true,
  },
  {
    Id: 10,
    name: "Harry Yellow",
    email: "harry.yellow@example.com",
    erole: EmpRole.Developer,
    status: false,
  },
];

function updateEmployee(
  emp: EmployeeData,
  updates: Partial<EmployeeData>
): EmployeeData {
  return { ...emp, ...updates };
}

const updatedEmployee = updateEmployee(employees[1], { name: "Ashwini" });
console.log("Updated User:");
console.log(updatedEmployee);

type EmployeeSummary = Pick<EmployeeData, "name" | "erole">;

function displaySummary(): void {
  employees.forEach((e: EmployeeSummary) => {
    console.log({ name: e.name, role: e.erole });
  });
}

console.log("Display summary of employee:");
displaySummary();

const emp: Record<EmpRole, EmployeeData[]> = {
  [EmpRole.Manager]: [],
  [EmpRole.Developer]: [],
  [EmpRole.Intern]: [],
};

employees.forEach((employee) => {
  emp[employee.erole].push(employee);
});
console.log(emp);

interface Activity {
  employeeId: number;
  activity: string;
  timestamp: Date;
}

const activityLog: Activity[] = [];

function isManager(
  employee: EmployeeData
): employee is EmployeeData & { erole: EmpRole.Manager } {
  return employee.erole === EmpRole.Manager;
}

function logActivity(employeeId: number, activity: string): void {
  const employee = employees.find(
    (e) => e.Id === employeeId && e.status === true
  );
  if (employee) {
    activityLog.push({
      employeeId,
      activity,
      timestamp: new Date(),
    });
    console.log(`Activity logged for ${employee.name}: ${activity}`);
  } else {
    console.log("Employee not found or inactive");
  }
}

function approveReport(employeeId: number): void {
  const employee = employees.find((e) => e.Id === employeeId);
  if (employee && isManager(employee)) {
    logActivity(employeeId, "Approved a report");
    console.log(`${employee.name} approved a report.`);
  } else {
    console.log("Only managers can approve reports.");
  }
}

logActivity(2, "Completed a task");
logActivity(3, "Started a project");
logActivity(4, "Reviewed a document");
logActivity(5, "Fixed a bug");
logActivity(6, "Attended a meeting");
logActivity(8, "Conducted an interview");
logActivity(9, "Prepared a report");
logActivity(10, "Updated software");

console.log("Activity Log:", activityLog);

const totalEmployees = employees.length;

const activeEmployees = employees.filter((employee) => employee.status).length;

const roleDistribution: Record<EmpRole, number> = {
  [EmpRole.Manager]: 0,
  [EmpRole.Developer]: 0,
  [EmpRole.Intern]: 0,
};

employees.forEach((employee) => {
  roleDistribution[employee.erole]++;
});

console.log(`Total Employees: ${totalEmployees}`);
console.log(`Active Employees: ${activeEmployees}`);
console.log("Role Distribution:");
for (const role in roleDistribution) {
  console.log(`${role}: ${roleDistribution[role as EmpRole]}`);
}
