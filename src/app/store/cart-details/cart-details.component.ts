import { Component } from "@angular/core";
import { Cart, Tip } from "src/app/model/cart.model";
import { Product } from "src/app/model/product.model";
import { AppConstants } from "src/app/shared/app-constants";

@Component({
    selector:'app-cart-details',
    templateUrl: 'cart-details.component.html'
})
export class CartDetailsComponent{
    showOtherTip: boolean = false;
    taxRate: number =0;
    tipAmount: number = 0;
    tipPercent: number = AppConstants.DefaultTipPercent;
    customTip: number=0;
    payment: number = 0;
    taxAmount: number = 0;
    constructor(public cart: Cart){
        this.taxRate = AppConstants.TaxRate;
        this.tipAmount = this.cart.defaultTipAmount;
        this.calculatePayment();
    }


    selectTip(tip:Tip){
        this.tipAmount = tip.tipAmount;
        this.tipPercent = tip.percent;
        this.showOtherTip = false;
        this.calculatePayment();
    }
    removeLine(id?: number){
        this.cart.removeLine(id ?? 0);
        this.tipAmount = this.cart.defaultTipAmount;
        this.calculatePayment();
    }
    updateQuantity(product: Product, quantity: number){
        this.cart.updateQuantity(product,quantity);
        this.tipPercent = AppConstants.DefaultTipPercent;
        this.tipAmount = this.cart.defaultTipAmount;        
        this.calculatePayment();
    }

    applyCustomTip(customTipAmount: number){
        this.tipAmount = customTipAmount;
        this.calculatePayment();
    }

    calculatePayment() {
        this.cart.tipAmount = this.tipAmount;
        this.cart.totalPayment = this.cart.totalPrice + this.cart.taxAmount + this.tipAmount;        
    }
}