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
class Invoice {
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
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = []; // make this arraydoesn't accept any type .. just a classes as invoice structure
invoices.push(invOne)
invoices.push(invTwo);
// invoices.push("Lol") // -------- CAN'T
// invoices.push({ name: 'shaun' }); // -------- CAN'T

console.log(invoices);