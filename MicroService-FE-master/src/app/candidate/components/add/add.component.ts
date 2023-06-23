import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/Candidat';
import { Education } from 'src/app/models/Education';
import { Experience } from 'src/app/models/Experience';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  candidat = new Candidat()

  ngOnInit(): void {
    let exp = new Experience()
    let educ = new Education()
    this.candidat.education = []
    this.candidat.experience = []
    this.candidat.education.push(educ)
    this.candidat.experience.push(exp)
  }

  addEducation(){
    let educ = new Education()
    this.candidat.education.push(educ)
  }

  addExperience(){
    let exp = new Experience()
    this.candidat.experience.push(exp)
  }

  save(){
    console.log(this.candidat)
  }

}
