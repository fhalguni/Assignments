var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClass(target) {
    console.log("Class: " + target.name);
}
function logMethod(target, propertyKey, descriptor) {
    console.log("Method: " + propertyKey);
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myMethod = function () {
        console.log("Executing myMethod");
    };
    MyClass.prototype.anotherMethod = function () {
        console.log("Executing anotherMethod");
    };
    __decorate([
        logMethod
    ], MyClass.prototype, "myMethod", null);
    __decorate([
        logMethod
    ], MyClass.prototype, "anotherMethod", null);
    MyClass = __decorate([
        logClass
    ], MyClass);
    return MyClass;
}());
var myClassInstance = new MyClass();
myClassInstance.myMethod();
myClassInstance.anotherMethod();
