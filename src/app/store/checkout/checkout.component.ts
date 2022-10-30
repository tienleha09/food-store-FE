import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Cart } from "src/app/model/cart.model";
import { Order } from "src/app/model/order.model";
import { OrderRepository } from "src/app/model/order.repository";

@Component({
    selector: 'app-checkout',
    templateUrl: 'checkout.component.html',    
})
export class CheckoutComponent{
    contactForm!: FormGroup // ! tells compiler that this will be assigned a value
    formSubmitted: boolean = false;
    
    constructor(public cart: Cart, public orderRepo: OrderRepository){   }
    ngOnInit(){
        this.contactForm = new FormGroup({
            firstName: new FormControl("",{
                validators:[
                    Validators.required
                ]
            }),
            lastName: new FormControl("", {
                validators: [Validators.required]
            }),
            phoneNumber: new FormControl("",{
                validators:[Validators.required,
                            Validators.pattern("^[0-9]*$"),
                            Validators.minLength(10),
                            Validators.maxLength(11)]
            }),
            email: new FormControl("",{
                validators: [Validators.required, Validators.email]
            })
        });
    }

    get firstName(){//return form control, ! means that this will definitely be assigned and not null
         return this.contactForm.get("firstName")!;
    } 
    get lastName(){
         return this.contactForm.get("lastName")!;
    }
    get phoneNumber(){ return this.contactForm.get("phoneNumber")!;}
    get email(){ return this.contactForm.get("email")!;}

    submitOrder(){
        if(this.contactForm.valid){
            let order = new Order(this.cart);
            Object.assign(order, this.contactForm.value);
            this.orderRepo.saveOrder(order);
            this.cart.clear();
            this.formSubmitted = true;
        }

    }
}