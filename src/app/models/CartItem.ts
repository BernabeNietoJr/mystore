export class CartItem {
    id ?: number;
    url: string;
    name: string;
    price: number;
    quantity: number;
    amount: number;

    constructor() {
        this.id = 0;
        this.url = '';
        this.name = '';
        this.price = 0;
        this.quantity = 1;
        this.amount = 0;
    }
}