import { Component, OnInit } from '@angular/core';
import {EvaluationService} from "../../evaluation.service";
import {Evaluation} from "../../../models/Evaluation";

@Component({
  selector: 'app-list-eval',
  templateUrl: './list-eval.component.html',
  styleUrls: ['./list-eval.component.css']
})
export class ListEvalComponent implements OnInit {

  constructor(
    private evalService : EvaluationService
  ) { }

  listEval : Evaluation[]  = []

  ngOnInit(): void {
    this.evalService.getEvaluations().subscribe(res => {
      this.listEval = res
    })
  }

  edit(id) {
    window.location.href = '/#/eval/editEval?id='+id;
  }

  delete(id) {
    this.evalService.deleteEval(id).subscribe(res => {
      this.ngOnInit()
    })
  }
}
