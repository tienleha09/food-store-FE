import { Injectable } from "@angular/core";
import { AppConstants } from "../shared/app-constants";
import { Product } from "./product.model";

@Injectable()
export class Cart{
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public totalPrice: number = 0;
    public defaultTipAmount: number = 0;
    public taxAmount: number =0;
    public totalPayment: number = 0;
    public tipAmount: number = 0;
    

    addLine(product: Product, quantity: number = 1){
        let line = this.lines.find(l => l.product.id == product.id);
        if(line != undefined){
            line.quantity += quantity;           
        }
        else{
            this.lines.push(new CartLine(product,quantity));
        }
        this.recalculateTotal();
    }

    private recalculateTotal(){
        this.itemCount = 0;
        this.totalPrice = 0;
        this.lines.forEach(l =>{
            this.itemCount += l.quantity;
            this.totalPrice += l.lineTotal;
        });
        this.defaultTipAmount = this.totalPrice * AppConstants.DefaultTipPercent;
        this.taxAmount = this.calculateTax(AppConstants.TaxRate);
    }

    updateQuantity(product: Product, quantity: number){
        let line = this.lines.find(l => l.product.id == product.id);
        if(line != undefined){
            line.quantity = Number(quantity); 
            this.recalculateTotal();          
        }
    }

    clear(){
        this.lines = [];
        this.itemCount = 0;
        this.totalPrice = 0;
        this.defaultTipAmount = 0;
        this.taxAmount =0;
        this.totalPayment = 0;
        this.tipAmount = 0;
    }

    removeLine(productId: number){
        let lineIndex = this.lines.findIndex(l => l.product.id == productId);
        this.lines.splice(lineIndex,1);
        this.recalculateTotal();
    }

    get tipOptions(): Tip[]{
        let options: Tip[] = [];
        let percentage = AppConstants.TipPercent;
        percentage.forEach(p =>{
            options.push(new Tip(this.totalPrice,p));
        });
        return options;
    }

    calculateTax(rate: number):number{
        return this.totalPrice * rate;
    }

}

export class CartLine{
    constructor(public product: Product, public quantity: number){}

    get lineTotal(){
        return (this.product.price ?? 0) * this.quantity;
    }
}

export class Tip{
    constructor(public total: number, public percent: number){}

    get tipAmount(){
        return this.total * this.percent;
    }
}