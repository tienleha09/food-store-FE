import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Injectable()
export class AuthGuard{
    constructor(private auth: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(!this.auth.authenticated){
            this.router.navigateByUrl("/admin/auth");
            return false;
        }
        return true;
    }
}