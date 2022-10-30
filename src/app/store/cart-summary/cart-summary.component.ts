import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "src/app/model/cart.model";

@Component({
    selector: 'app-cart',
    templateUrl: 'cart-summary.component.html'
})

export class CartSummaryComponent{
    
    constructor(public cart: Cart, public router: Router){}


   
    
}