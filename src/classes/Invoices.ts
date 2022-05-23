
export class Invoice {
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
