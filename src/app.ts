import { Invoice } from './classes/Invoices.js'; // (.js) because it will work on the configerd files in the public folder 

/**  Access Elements */
// const anchor = document.querySelector("a")!; // the (!) said : i know that this element has already exect, so don't show an error when i access it
const form = document.querySelector(".new-item-form") as HTMLFormElement; // Now i can access it as form element and use all form's prototypes here
// Access The form inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber // to access it as a number not string
  );
});

/**Classes in typescript */

// classes

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = []; // make this arraydoesn't accept any type .. just a classes as invoice structure
invoices.push(invOne)
invoices.push(invTwo);
// invoices.push("Lol") // -------- CAN'T
// invoices.push({ name: 'shaun' }); // -------- CAN'T

console.log(invoices);

/** Interfaces in Typescript */


// interfaces
export interface IsPerson { // it's like an object type stampa
  name: string;
  age?: number; // the ((?)) means it's an optional value 
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'shaun',
  //age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  },
};

console.log(me);
me.speak('hello, world');

const greetPerson = (person: IsPerson): void => {
  console.log('hello ', person.name);
}

greetPerson(me);
//greetPerson({name: 'shaun'}); // CAN'T
