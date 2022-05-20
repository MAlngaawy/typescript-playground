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