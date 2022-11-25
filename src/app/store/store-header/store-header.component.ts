import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "src/app/model/cart.model";

@Component({
    selector: 'store-header',
    templateUrl: 'store-header.component.html'
})

export class StoreHeaderComponent{
    
    constructor(public cart: Cart, public router: Router){}


   
    
}