import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean=false

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string) {
    return this.http.post(`/v1/login?username=${username}&password=${password}`, {})
  }

}
