"use strict";
// Type script uses stric types but Javascript don't
/** Variables stric types ==> Can't chage it to another type */
var myName = "Mohammed";
var myAge = 24;
var single = true;
/** Functions arguments type stric also (( Use Arrow Functions )) */
var showThisMath = function (num) {
    return num + 3;
};
(showThisMath(6)); // The argument must be a number type
/**Arrayes ==> You Can just edit it's value by the same values array already containe,
 *  and add ust the same types in the array even it was one type or more than that ,
 *  you can just add a type that the array olready contains */
var students = ['Mohammed', "Kareem", "Salah"]; // Just Strings
var ages = [10, 20, 55]; // Just Numbers
var randomArr = ["mohammed", 25]; // nums or str
/**Objucts ==> Object's name and value looks like variable in the TS
 * you can't change the object's name value to another data type == you can change to the same type
 * you can't add another value to the object
 * you can't change the object to ant other type like array
 * you can change the object to another object ((BUT)) with the same keys with the same value data type
 * it's too stric maaan :)
 */
var car = {
    name: "BMW",
    motor: 250,
    used: false
};
/********** Expicity Values */
// Variables
var myNameIs;
var myAgeIs;
var twoValues; // it can be numbers or string
// Arrayes
var employes = []; // sexplicity values with an empty array so you can push to it
var employesData = []; // union types ==> Two data types
// Objects
var studentOne;
studentOne = { lol: "Lol Type", num: 30 };
studentOne = ["okay"]; // ((((((((((((((it will work because the array is an object ))))))))))))))
var studentTwo;
studentTwo = { name: "Ali", age: 25, married: false };
/** Noooooooooow with the ((((( any )))))
 * You can use it with anything lie these examples
 */
var age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);
var mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
var ninja;
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);
/**
 * ________________________________ FUNCTION ___________________________*
 */
var greet; // You can spicify function type py wtite it by capital F
greet = function () {
    console.log("Greet, it's work");
};
// function argument type can be optional like this
var optionalArg = function (a, b, c) {
    return a + b;
};
optionalArg(15, 20, "10");
// and it can have a default value
var defaultArg = function (a, b, c) {
    if (c === void 0) { c = false; }
    console.log("".concat(a, " is a peace of ship ").concat(b, " and ").concat(c));
};
defaultArg(10, "25");
defaultArg(10, "25", true);
// You can spicify the function return value type like this
var stricReturn = function (a) {
    return a.length;
};
console.log(stricReturn("Lolll Ya Man"));
var greetUsingAliases = function (user) {
    return "userName: ".concat(user.name, " and it's id ").concat(user.uid);
};
var greetUsingAliaseAgain = function (user) {
    return "userName: ".concat(user.name, " and it's id ").concat(user.uid);
};
greetUsingAliaseAgain({ name: "Sr", uid: 15 });
greetUsingAliases({ name: "Sr", uid: "Still work" });
/** You Can spicify more in function */
// let greet: Function;
// example 1
var greeting; // void means return nothing
greeting = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
// example 2
var calc; // return number
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else { // without else it will be error becauese it will return undefined wich isn't a number
        return numOne - numTwo;
    }
};
// example 3
var logDetails; // with object
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
