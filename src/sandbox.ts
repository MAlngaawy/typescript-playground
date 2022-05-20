// Type script uses stric types but Javascript don't

/** Variables stric types ==> Can't chage it to another type */
let myName = "Mohammed"
let myAge = 24 
let single = true


/** Functions arguments type stric also (( Use Arrow Functions )) */
const showThisMath = (num: number) => { // Stric the argument value
  return num + 3
}
(showThisMath(6)) // The argument must be a number type


/**Arrayes ==> You Can just edit it's value by the same values array already containe,
 *  and add ust the same types in the array even it was one type or more than that ,
 *  you can just add a type that the array olready contains */
let students = ['Mohammed', "Kareem", "Salah"] // Just Strings
let ages = [10, 20, 55] // Just Numbers
let randomArr = ["mohammed", 25] // nums or str

/**Objucts ==> Object's name and value looks like variable in the TS 
 * you can't change the object's name value to another data type == you can change to the same type
 * you can't add another value to the object
 * you can't change the object to ant other type like array
 * you can change the object to another object ((BUT)) with the same keys with the same value data type
 * it's too stric maaan :)
 */
const car = {
  name: "BMW",
  motor: 250,
  used: false
}

/********** Expicity Values */
// Variables
let myNameIs: string;
let myAgeIs: number;
let twoValues: number | string // it can be numbers or string

// Arrayes
let employes: string[] = [] // sexplicity values with an empty array so you can push to it
let employesData: (string | boolean)[] = [] // union types ==> Two data types

// Objects
let studentOne: object
studentOne = {lol: "Lol Type", num: 30}
studentOne = ["okay"] // ((((((((((((((it will work because the array is an object ))))))))))))))

let studentTwo: {
  name: string,
  age: number,
  married: boolean
}
studentTwo = {name: "Ali", age: 25, married: false}


/** Noooooooooow with the ((((( any )))))
 * You can use it with anything lie these examples
 */

 let age: any = 25;

 age = true;
 console.log(age);
 age = 'hello';
 console.log(age);
 age = { name: 'luigi' };
 console.log(age);
 
 let mixed: any[] = [];
 
 mixed.push(5);
 mixed.push('mario');
 mixed.push(false);
 console.log(mixed);
 
 let ninja: { name: any, age: any };
 
 ninja = { name: 'yoshi', age: 25 };
 console.log(ninja);
 
 ninja = { name: 25, age: 'yoshi' };
 console.log(ninja);

 /**
  * ________________________________ FUNCTION ___________________________*
  */

 let greet: Function // You can spicify function type py wtite it by capital F
 greet = () => {
   console.log("Greet, it's work")
 }

 // function argument type can be optional like this
 let optionalArg = (a: number, b: number, c?: number | string) => { // if you don't pass the C, it'll be okay
   return a + b
 }
 optionalArg(15,20, "10")

 // and it can have a default value

 let defaultArg = (a: number, b: string, c: boolean = false) => { // if you don't assign c value it will be false by default
    console.log(`${a} is a peace of ship ${b} and ${c}`)
 }
 defaultArg(10,"25")
 defaultArg(10,"25", true)

 // You can spicify the function return value type like this
 let stricReturn = (a: string): number => { // it will just return a number or it will show an error
   return a.length
 }
console.log(stricReturn("Lolll Ya Man"))

/** type Aliases */
// you can save time and effort by doing that
type StrOrNum = string | number
type ObjWithName = {name: string, uid: StrOrNum}

let greetUsingAliases = (user: {name: string, uid: StrOrNum}) => { // stric the object argument type
  return `userName: ${user.name} and it's id ${user.uid}`
}

let greetUsingAliaseAgain = (user: ObjWithName) => { // stric the object argument type
  return `userName: ${user.name} and it's id ${user.uid}`
}

greetUsingAliaseAgain({name: "Sr", uid: 15})
greetUsingAliases({name: "Sr", uid: "Still work"})

/** You Can spicify more in function */

// let greet: Function;

// example 1
let greeting: (a: string, b: string) => void; // void means return nothing

greeting = (name: string, greeting: string) => { // Can't add or delete argument from it
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number; // return number

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else { // without else it will be error becauese it will return undefined wich isn't a number
    return numOne - numTwo;
  }
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void; // with object
type person = {name: string, age: number} // To save time and effort & you can reuse it

logDetails = (ninja: person) => { // it works well
  console.log(`${ninja.name} is ${ninja.age} years old`);
}