import { Component, OnInit } from '@angular/core';
import {CandidaturesService} from "../candidatures.service";
import {Candidatures} from "../../models/Candidatures";

@Component({
  selector: 'app-add-candidatures',
  templateUrl: './add-candidatures.component.html',
  styleUrls: ['./add-candidatures.component.css']
})
export class AddCandidaturesComponent implements OnInit {


  constructor(
    private candidatureService : CandidaturesService
  ) { }

  candidature : Candidatures = new Candidatures()

  ngOnInit(): void {
  }

  save(){
    this.candidatureService.saveCandidature(this.candidature).subscribe(res => {
      window.location.href = '/#/candidatures/listCandidatures';
    })
  }

}
