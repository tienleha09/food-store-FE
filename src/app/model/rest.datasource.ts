import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, from, map, Observable, of } from "rxjs";
import { Order } from "./order.model";
import { Product } from "./product.model";

export interface IRestReponseData{
    success: string,
    errorMessage?: string
}

@Injectable()
export class RestDataSource{
    baseUrl: string;
    auth_token?: string;
    constructor(private http: HttpClient){
        this.baseUrl = 'https://localhost:44300/api/';
    }
    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl + "products");
    }

    saveProduct(product: Product): Observable<Product>{
        return this.http.post(`${this.baseUrl}products`,product,this.getHttpOptions());
    }

    updateProduct(product: Product): Observable<Product>{
        return this.http.put(`${this.baseUrl}products/${product.id}`,product,this.getHttpOptions());
    }

    deleteProduct(id: number): Observable<any>{
        return this.http.delete(`${this.baseUrl}products/${id}`,this.getHttpOptions());
    }

    saveOrder(order: Order): Observable<Order>{
        console.log(JSON.stringify(order));
        return from([order]);
    }

    authenticate(userName: string, password: string): Observable<boolean>{

        return this.http.post<any>(this.baseUrl +"auth/login",{username:userName,password:password})
            .pipe(
                map(response =>{ //transform the http response to an observable type of boolean
                this.auth_token = response.success ? response.token : null;
                return response.success;
            }),
            catchError((err: HttpErrorResponse) => {
                return of(false)
            }));
            
    }

    private getHttpOptions(){
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<${this.auth_token}>`
            })
        }
    }

    logout(): Observable<any>{
       return this.http.get<any>(this.baseUrl +"auth/logout",this.getHttpOptions());
    }

}