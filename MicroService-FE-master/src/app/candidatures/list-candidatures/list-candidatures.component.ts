import { Component, OnInit } from '@angular/core';
import {CandidaturesService} from "../candidatures.service";
import {Candidatures} from "../../models/Candidatures";

@Component({
  selector: 'app-list-candidatures',
  templateUrl: './list-candidatures.component.html',
  styleUrls: ['./list-candidatures.component.css']
})
export class ListCandidaturesComponent implements OnInit {

  constructor(
    private candidatureService : CandidaturesService
  ) { }

  listCandidature : Candidatures[]  = []

  ngOnInit(): void {
    this.candidatureService.getCandidatures().subscribe(res => {
      this.listCandidature = res
    })
  }

  edit(id) {
    window.location.href = '/#/candidatures/editCandidature?id='+id;
  }

  delete(id) {
    this.candidatureService.deleteCandidature(id).subscribe(res => {
      this.ngOnInit()
    })
  }
}
