import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { ProductRepository } from "./product.repository";
import { RestDataSource } from "./rest.datasource";

@NgModule({
    imports:[
        HttpClientModule
    ],
    providers: [
        RestDataSource, ProductRepository, Cart, Order, OrderRepository, AuthService
    ]
})
export class ModelModule{}