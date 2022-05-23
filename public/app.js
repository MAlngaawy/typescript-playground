import { Invoice } from './classes/Invoices.js'; // (.js) because it will work on the configerd files in the public folder 
/**  Access Elements */
// const anchor = document.querySelector("a")!; // the (!) said : i know that this element has already exect, so don't show an error when i access it
const form = document.querySelector(".new-item-form"); // Now i can access it as form element and use all form's prototypes here
// Access The form inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber // to access it as a number not string
    );
});
/**Classes in typescript */
// classes
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = []; // make this arraydoesn't accept any type .. just a classes as invoice structure
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push("Lol") // -------- CAN'T
// invoices.push({ name: 'shaun' }); // -------- CAN'T
console.log(invoices);
