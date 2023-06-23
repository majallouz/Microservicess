import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../employee.service";
import {Employees} from "../../../models/Employee";

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  constructor(
    private empService : EmployeesService
  ) { }

  listEmp : Employees[]  = []

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(res => {
      this.listEmp = res
    })
  }

  edit(id) {
    window.location.href = '/#/emp/editEmp?id='+id;
  }

  delete(id) {
    this.empService.deleteEmp(id).subscribe(res => {
      this.ngOnInit()
    })
  }
}
