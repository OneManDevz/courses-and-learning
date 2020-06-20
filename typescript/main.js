"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Waddup!';
console.log(message);
var name = "Johnny";
var sentence = "My name is " + name + "\nI am learning typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Johnny", 22]; //tuple
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "Johnny";
var myVar = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVar)) {
    console.log(myVar.name);
}
//(myVar as string).toUpperCase(); //myVar should be treated as string
var multitype;
multitype = 20;
multitype = true;
function add(number1, number2) {
    if (number2 === void 0) { number2 = 10; }
    if (number2) {
        return number1 + number2;
    }
    else {
        return number1;
    }
}
console.log(add(5));
//function with object as parameter
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
//object
var p = {
    firstName: "Johnny",
    lastName: "Digger"
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Waddup " + this.employeeName + "!");
    };
    return Employee;
}());
var employee1 = new Employee("Johnny");
console.log(employee1.employeeName);
employee1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating work");
    };
    return Manager;
}(Employee));
var manager1 = new Manager("Jean");
manager1.delegateWork();
manager1.greet();
console.log(manager1.employeeName);
