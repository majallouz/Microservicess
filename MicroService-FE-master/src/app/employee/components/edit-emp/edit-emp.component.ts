import { Component, OnInit } from '@angular/core';
import {Employees} from "../../../models/Employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeesService} from "../../employee.service";

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

constructor(private route: ActivatedRoute,    private empService : EmployeesService) { }

  emp : Employees = new Employees()

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params["id"]){
        this.empService.getEmp(params["id"]).subscribe(res => {
          this.emp = res
        })
      }
    });
  }

  save() {
    this.empService.editEmp(this.emp).subscribe(res => {
      window.location.href = '/#/emp/listemp';
    })
  }
}
