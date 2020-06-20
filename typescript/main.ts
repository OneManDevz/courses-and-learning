export{}
let message = 'Waddup!';
console.log(message);
let name: string = "Johnny"

let sentence: string = `My name is ${name}
I am learning typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName:string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ["Johnny", 22]; //tuple

enum Color{Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "Johnny";

let myVar: unknown = 10;

function hasName(obj: any): obj is {name: string}{ //checks if object has name
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
    }
if(hasName(myVar)){
    console.log(myVar.name);
}
//(myVar as string).toUpperCase(); //myVar should be treated as string

let multitype: number | boolean;
multitype = 20;
multitype = true;

function add(number1: number, number2: number = 10): number{
    if (number2){
        return number1 + number2;
    }
    else{
        return number1;
    }
}
console.log(add(5));

interface Person{
    firstName: string;
    lastName: string;
}

//function with object as parameter
function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

//object
let p = {
    firstName: "Johnny",
    lastName: "Digger",
};
fullName(p);

class Employee{
    public employeeName: string;
    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Waddup ${this.employeeName}!`);
    }
}

let employee1 = new Employee("Johnny");
console.log(employee1.employeeName);
employee1.greet();

class Manager extends Employee{ //inheritance
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating work`);
    }
}

let manager1 = new Manager("Jean");
manager1.delegateWork();
manager1.greet();
console.log(manager1.employeeName);