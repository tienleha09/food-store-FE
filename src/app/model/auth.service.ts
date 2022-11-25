import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AuthService{

    constructor(private datasource: RestDataSource) { }

    authenticate(username: string, password: string): Observable<boolean>{
        return this.datasource.authenticate(username,password);
    }

    get authenticated(){
        return this.datasource.auth_token != null;
    }

    clear() {
        this.datasource.auth_token = undefined;
    }

    logout(): Observable<boolean>{
        return this.datasource.logout().pipe(catchError(err => of(false)));       
    }
}