import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth.component";
import { AuthGuard } from "./auth.guard";
import { OrderDisplayComponent } from "./orders/orderDisplay.component";
import { ProductDisplayComponent } from "./products/productDisplay.component";
import { ProductEditorComponent } from "./products/productEditor.component";
import { ProductTableComponent } from "./products/productTable.component";

const routing = RouterModule.forChild([
    {path: "auth", component: AuthComponent},
    {path: "main", component: AdminComponent,
     canActivate: [AuthGuard],
     children: [
        {path: "products", component: ProductDisplayComponent},
        {path: "orders", component: OrderDisplayComponent},
        {path: "**", component: ProductDisplayComponent}
     ]
    },
    {path: "**", component: AuthComponent}
])

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        routing,
        SharedModule
        
    ],
    declarations:[
        AdminComponent,
        AuthComponent,
        ProductDisplayComponent,
        ProductTableComponent,
        ProductEditorComponent,
        OrderDisplayComponent
    ],
    providers:[AuthGuard]
})
export class AdminModule{}