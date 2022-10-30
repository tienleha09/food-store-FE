import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Order } from "./order.model";
import { Product } from "./product.model";

@Injectable()
export class RestDataSource{
    baseUrl: string;
    constructor(private http: HttpClient){
        this.baseUrl = 'http://localhost:3000/';
    }
    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl + "products");
    }

    saveOrder(order: Order): Observable<Order>{
        console.log(JSON.stringify(order));
        return from([order]);
    }
}