import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employees} from "../models/Employee";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  // @ts-ignore
  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<any> {
    //return this.http.get<Employees>('assets/mock/employees.json')
    return this.http.get<Employees>('/employees/getAllEmployee')
  }

  saveEmp(body){
    return this.http.post('/employees/createEmployee',body)
  }

  editEmp(body){
    return this.http.put('/employees/updateEmployee/'+body.id,body)
  }

  getEmp(id){
    //return this.http.get<Employees>('assets/mock/employees.json')
    return this.http.get<Employees>('/employees/'+id)
  }

  deleteEmp(id){
    return this.http.delete<any>('/employees/deleteEmployee/'+id)
  }
}
