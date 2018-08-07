console.log('Hello World!');

// types

var myString: string = "Hell world";
myString = 22 + "";

var myNumber: number = 22;
var myBool: boolean = true || false;

var myVar: any = "hello";
myVar = false;


// Strings

document.writeln(myNumber.toString());

// Arrays
var StringArray: string[] = ["","",""];
var NumberArray: number[] = [1, 2, 3, 4];
var BooleanArray: boolean[] = [true, false];
var AnyArray: any[] = [1, 2, true, "hello", [], {}];

// tuple
var strNumTuple: [string, number];
strNumTuple = ["Hello", 22];

// void, undefined, null
const PI = 3.1415;
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

document.writeln(typeof(strNumTuple));
document.writeln(typeof(myVoid));

// Functions
function getSum(num1: number, num2: number):number {
    return num1 +  num2;
}

let mySum = function(
    num1: number | string, 
    num2: number | string):number {
        
        if(typeof(num1) === 'string') {
            num1 = parseInt(num1);
        }

        if(typeof(num2) === 'string') {
            num2 = parseInt(num2);
        }

        return num1 + num2;
    }

function getName(firstName: string, lastName?: string): string {

    if(lastName == undefined){
        return firstName;
    }

    return `${firstName} ${lastName}`;
}

document.writeln(getName("Jesus"));

document.writeln(getName("Isaac", "Asimov"));

function myVoidFunction():void {
    return;
}

// Interfaces
function showTodo(todo: {title: string; text: string}){
    console.log(`${todo.title} - ${todo.text}`)
}

showTodo({
    title: 'Eat Dinner',
    text: 'lorem'
});

interface ITodo {
    title: string,
    text: string;
}

function newShowTodo(todo: ITodo){
    console.log(`${todo.title} - ${todo.text}`);
}

newShowTodo({
    title: 'Eat Dinner',
    text: 'lorem'
});

let myTodo: ITodo = {title: 'Eat dinner', text: 'lorem'};

// Clases

class User {
    private name: string;
    public email: string;
    protected age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register(){
        console.log(`${this.name} is registered`);
    }

    showMeAge() {
        return this.age;
    }

    public AgeInYears() {
        return this.age + ' years';
    }

    payInvoice() {
        console.log(`${this.name} paid invoice`)
    }
}

var john = new User('john', 'john@email.com', 24);

document.writeln(john.AgeInYears());

console.log(john.register());

class Member extends User {
    id: number;

    constructor(id, name, email, age) {
        super(name, email, age);
    }

    payInvoice() {
        super.payInvoice();
    }
}

var gordon = new Member(1, 'Gordon', 'gordon@email.com', 24);

gordon.payInvoice();