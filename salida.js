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
console.log('Hello World!');
// types
var myString = "Hell world";
myString = 22 + "";
var myNumber = 22;
var myBool = true || false;
var myVar = "hello";
myVar = false;
// Strings
document.writeln(myNumber.toString());
// Arrays
var StringArray = ["", "", ""];
var NumberArray = [1, 2, 3, 4];
var BooleanArray = [true, false];
var AnyArray = [1, 2, true, "hello", [], {}];
// tuple
var strNumTuple;
strNumTuple = ["Hello", 22];
// void, undefined, null
var PI = 3.1415;
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
document.writeln(typeof (strNumTuple));
document.writeln(typeof (myVoid));
// Functions
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
document.writeln(getName("Jesus"));
document.writeln(getName("Isaac", "Asimov"));
function myVoidFunction() {
    return;
}
// Interfaces
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
showTodo({
    title: 'Eat Dinner',
    text: 'lorem'
});
function newShowTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
newShowTodo({
    title: 'Eat Dinner',
    text: 'lorem'
});
var myTodo = { title: 'Eat dinner', text: 'lorem' };
// Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return User;
}());
var john = new User('john', 'john@email.com', 24);
document.writeln(john.AgeInYears());
console.log(john.register());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        return _super.call(this, name, email, age) || this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordon = new Member(1, 'Gordon', 'gordon@email.com', 24);
gordon.payInvoice();
