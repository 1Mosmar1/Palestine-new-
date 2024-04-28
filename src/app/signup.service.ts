import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";






@Injectable({
    providedIn: 'root'
    })
    export class SignupService {
    url: string = "http://localhost/Back-end/inscription.php";
    constructor(public http: HttpClient) { }
    inscrituser (newuser: any){
    return this.http.post(this.url,newuser);
    }
}