enum Roles {
  Admin = "Admin",
  Manager = "Manager",
  Employee = "Employee",
}

interface User {
  id: number;
  name: string;
  email: string;
  role: Roles | string;
  phoneNumber?: string;
}
let users: User[] = [];
function createUser(user: User): User[] {
  users.push(user);
  return users;
}

function getUserByRole(role: string | Roles): User[] {
  let arr: User[] = [];
  const result = users.some((u) => u.role === role);
  if (!result) {
    console.log("No user found by this role");
  }
  users.forEach((u) => {
    if (u.role === role) {
      arr.push(u);
    }
  });
  return arr;
}

console.log("Added Users:");

const user1: User = {
  id: 1,
  name: "Ashwini",
  email: "abcd@gmail.com",
  role: "Manager",
};

const user2: User = {
  id: 2,
  name: "Seema",
  email: "abcde@gmail.com",
  role: "Admin",
  phoneNumber: "9657882677",
};

console.log(createUser(user1));
console.log(createUser(user2));

console.log("Serched Users:");

console.log(getUserByRole("Admin"));
// console.log(getUserByRole("Manager"));
