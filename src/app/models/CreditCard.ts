export class CreditCard {
    
    cardNumber: string;
    holderName: string;
    securityCode: number;
    expiryDate: Date;
    
    constructor() {

        this.cardNumber = '';
        this.holderName = '';
        this.securityCode = 0;
        this.expiryDate = new Date;
       
    }
}