import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EvaluationService} from "../../evaluation/evaluation.service";
import {Evaluation} from "../../models/Evaluation";
import {CandidaturesService} from "../candidatures.service";
import {Candidatures} from "../../models/Candidatures";

@Component({
  selector: 'app-edit-candidatures',
  templateUrl: './edit-candidatures.component.html',
  styleUrls: ['./edit-candidatures.component.css']
})
export class EditCandidaturesComponent implements OnInit {

  constructor(private route: ActivatedRoute,    private candidateServes : CandidaturesService) { }

  candidature : Candidatures = new Candidatures()

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params["id"]){
        this.candidateServes.getCandidature(params["id"]).subscribe(res => {
          this.candidature = res
        })
      }
    });
  }

  save() {
    this.candidateServes.editCandidature(this.candidature).subscribe(res => {
      window.location.href = '/#/candidatures/listCandidatures';
    })
  }

}
