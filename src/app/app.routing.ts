import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreFirstGuard } from "./store-first.guard";
import { CartDetailsComponent } from "./store/cart-details/cart-details.component";
import { CheckoutComponent } from "./store/checkout/checkout.component";

import { StoreComponent } from "./store/store.component";

const routes: Routes= [
    {path: 'cart', component: CartDetailsComponent, canActivate: [StoreFirstGuard]},
    {path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard]},
    {path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard]},
    {path: 'admin', loadChildren: () =>import('./admin/admin.module').then(m => m.AdminModule)},
    {path: '**', component: StoreComponent, canActivate: [StoreFirstGuard]}   
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}