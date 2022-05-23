"use strict";
// const anchor = document.querySelector("a")!; // the (!) said : i know that this element has already exect, so don't show an error when i access it
var form = document.querySelector(".new-item-form"); // Now i can access it as form element and use all form's prototypes here
// Like 
// console.log(form.children) // Now i can access the var as form 
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
