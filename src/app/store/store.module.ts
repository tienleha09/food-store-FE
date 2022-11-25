import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module"
import { SharedModule } from "../shared/shared.module";
import { CartDetailsComponent } from "./cart-details/cart-details.component";
import { StoreHeaderComponent } from "./store-header/store-header.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { StoreComponent } from "./store.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ModelModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    StoreComponent,
    StoreHeaderComponent,
    CartDetailsComponent,
    CheckoutComponent
    
  ],
  exports: [
    StoreComponent,
    StoreHeaderComponent,
    CartDetailsComponent,
    CheckoutComponent
  ],
})
export class StoreModule {}