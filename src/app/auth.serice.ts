import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(newPerson:any): Observable<any> {
    console.log(newPerson);
  
    return this.http.post<any>('',newPerson)
  }
  validateToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
  
    return this.http.post<any>('', {}, { headers });
  }
  
  

}
