import { Product } from "./product";

export class CartItem {
    id!:string;
    name!:string;
    imageUrl!:string;
    unitPrice!:number;
    quantity!:number;
    description!:string;

    constructor(product:Product){
        this.id=product.id;
        this.name=product.name;
        this.unitPrice=product.unitPrice;
        this.quantity=1;
        this.description=product.description;
    }
}
