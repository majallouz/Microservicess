import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  username:string
  email:string
  password:string
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  register() {
    this.registerService.register(this.username, this.email, this.password).subscribe (res => {
      console.log(res)
    })
  }

}
