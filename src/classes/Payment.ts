import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter { 

  // If you use modifying access (readonly or public or private) you can do it shortly like it
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ){}

  format() { // you must have this function because of the interface implementation
    return `${this.recipient} owes £${this.amount} for ${this.details}`;
  }
}
