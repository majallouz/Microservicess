import { Component, OnInit } from '@angular/core';
import {Employees} from "../../../models/Employee";
import {EmployeesService} from "../../employee.service";
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

 constructor(
    private empService : EmployeesService
  ) { }

  emp : Employees = new Employees()

  ngOnInit(): void {
  }

  save(){
    this.empService.saveEmp(this.emp).subscribe(res => {
      window.location.href = '/#/emp/listemp';
    })
  }
}
