function logClass(target: Function) {
  console.log("Class: " + target.name);
}

function logAccessor(
  target: object,
  propertyKey: string,
  descriptor?: PropertyDecorator
): void {
  console.log(propertyKey);
}
function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  console.log("Method: " + propertyKey);
}

@logClass
class MyClass {
  @logAccessor
  name4: string;
  constructor(name4: string) {
    this.name4 = name4;
  }
  @logMethod
  anotherMethod() {
    console.log("Executing anotherMethod");
  }

  @logMethod
  myMethod() {
    console.log("Executing myMethod");
  }
}

const myClassInstance = new MyClass("Ashwini");
myClassInstance.myMethod();
myClassInstance.anotherMethod();
