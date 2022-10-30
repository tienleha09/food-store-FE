import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module"
import { SharedModule } from "../shared/shared.module";
import { CartDetailsComponent } from "./cart-details/cart-details.component";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ValidationHelper } from "./helpers/validation-helper.pipe";
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
    CartSummaryComponent,
    CartDetailsComponent,
    CheckoutComponent,
    ValidationHelper
  ],
  exports: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailsComponent,
    CheckoutComponent,
  ],
})
export class StoreModule {}