import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(username:string, email:string, password:string) {
    return this.http.post(`/v1/api/user/save`, {"username":username, "email":email, "password":password})
  }
}
