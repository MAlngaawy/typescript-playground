"use strict";
/**  Access Elements */
// const anchor = document.querySelector("a")!; // the (!) said : i know that this element has already exect, so don't show an error when i access it
var form = document.querySelector(".new-item-form"); // Now i can access it as form element and use all form's prototypes here
// Access The form inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber // to access it as a number not string
    );
});
/**Classes in typescript */
// classes
var Invoice = /** @class */ (function () {
    /*
    // all values are public by default
    readonly client: string; // ((you (can read) inside and outside BUT you (can't edit) nither inside or outside))
    private details: string; // ((Now you (can't read) it outside the class))
    public amount: number; // ((it's public by default))
    
    constructor(c: string, d: string, a: number){
      this.client = c;
      this.details = d;
      this.amount = a;
    }
    */
    // If you use modifying access (readonly or public or private) you can do it shortly like it
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = []; // make this arraydoesn't accept any type .. just a classes as invoice structure
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push("Lol") // -------- CAN'T
// invoices.push({ name: 'shaun' }); // -------- CAN'T
console.log(invoices);
