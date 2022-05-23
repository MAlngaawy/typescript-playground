export class Payment {
    // If you use modifying access (readonly or public or private) you can do it shortly like it
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owes £${this.amount} for ${this.details}`;
    }
}
