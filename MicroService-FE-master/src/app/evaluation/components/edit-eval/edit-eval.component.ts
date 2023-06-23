import { Component, OnInit } from '@angular/core';
import {Evaluation} from "../../../models/Evaluation";
import {ActivatedRoute} from "@angular/router";
import {EvaluationService} from "../../evaluation.service";

@Component({
  selector: 'app-edit-eval',
  templateUrl: './edit-eval.component.html',
  styleUrls: ['./edit-eval.component.css']
})
export class EditEvalComponent implements OnInit {

  constructor(private route: ActivatedRoute,    private evalService : EvaluationService) { }

  eval : Evaluation = new Evaluation()

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params["id"]){
        this.evalService.getEval(params["id"]).subscribe(res => {
          this.eval = res
        })
      }
    });
  }

  save() {
    this.evalService.editEval(this.eval).subscribe(res => {
      window.location.href = '/#/eval/listEval';
    })
  }
}
