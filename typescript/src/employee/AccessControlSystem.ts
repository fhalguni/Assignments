enum Role1 {
  Admin = "Admin",
  UManager = "Manager",
  Employee = "Employee",
}

const rolePermissions: Record<Role1, string[]> = {
  [Role1.Admin]: ["viewReports", "editReports", "deleteReports"],
  [Role1.UManager]: ["viewReports", "editReports"],
  [Role1.Employee]: ["viewReports"],
};

class User {
  constructor(public Id: number, public name: string, public roles: Role1) {}
}
function Authorize(action: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const user: User = args[0];

      if (rolePermissions[user.roles].includes(action)) {
        return originalMethod.apply(this, args);
      } else {
        console.error(
          `Access Denied: ${user.name} does not have permission to ${action}`
        );
        return null;
      }
    };

    return descriptor;
  };
}

class ReportService {
  @Authorize("viewReports")
  viewReports(user: User) {
    console.log(`${user.name} is viewing reports.`);
  }

  @Authorize("editReports")
  editReports(user: User) {
    console.log(`${user.name} is editing reports.`);
  }

  @Authorize("deleteReports")
  deleteReports(user: User) {
    console.log(`${user.name} is deleting reports.`);
  }
}

const admin = new User(1, "Alice", Role1.Admin);
const manager = new User(2, "Bob", Role1.UManager);
const employee = new User(3, "Charlie", Role1.Employee);

const reportService = new ReportService();

reportService.viewReports(admin); // Allowed
reportService.editReports(admin); // Allowed
reportService.deleteReports(admin); // Allowed

reportService.viewReports(manager); // Allowed
reportService.editReports(manager); // Allowed
reportService.deleteReports(manager); // Denied

reportService.viewReports(employee); // Allowed
reportService.editReports(employee); // Denied
reportService.deleteReports(employee); // Denied
