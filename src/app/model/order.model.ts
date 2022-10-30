import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order{
    public id?: number;
    public phoneNumber?: number;
    public email?: string;
    public firstName?: string;
    public lastName?: string;
    public shipped?: boolean = false;


    constructor(public cart: Cart){}

    clear(){
        this.id = undefined;
        this.firstName = this.lastName  = this.email = undefined;
        this.phoneNumber = undefined;
        this.shipped = false;
        this.cart.clear();
    }
}