// let msg: unknown = "9659";
// console.log((msg as string).length);

interface User1 {
  id: number;
  name: string;
  email: string;
}

function updateUser(user1: User1, updates: Partial<User1>): User1 {
  return { ...user1, ...updates };
}

const user: User1 = { id: 1, name: "John", email: "abcd@gmail.com" };

const updatedUser = updateUser(user, { name: "Ashu" });

console.log(updatedUser);

type UserPreview = Pick<User1, "name" | "email">;
const userPreview: UserPreview = { name: "sjdi", email: "skdnk" };
console.log(userPreview);

type UserWithoutEmail = Omit<User1, "email">;
const userWithoutEmail: UserWithoutEmail = { id: 2, name: "dfhuh" };
console.log(userWithoutEmail);

let someValue: unknown = "ab";
console.log((someValue as string).toUpperCase());

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}

printValue(30);

class Dog {
  bark() {
    console.log("Woof!");
  }
}
class Cat {
  meow() {
    console.log("meow");
  }
}

function handleAnimal(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

handleAnimal(new Dog());
