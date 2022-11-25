import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Component({
    selector: "app-auth",
    templateUrl: 'auth.component.html'
})
export class AuthComponent{
    userName?: string;
    password?: string;
    errorMessage?: string;
    
    constructor(private router: Router, private authService: AuthService){}

    authenticate(loginForm: NgForm){
        if(loginForm.valid){
            this.authService.authenticate(this.userName ?? "",this.password ?? "")
            .subscribe(response =>{
                if(response){
                    this.router.navigateByUrl("/admin/main");
                }
                else{
                    this.errorMessage = "Failed to login.Try again!"
                }
            })            
        }
        else{
            this.errorMessage = "Form is invalid.Try again!"
        }
    }

}