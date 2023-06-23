import { Component, OnInit } from '@angular/core';
import {Evaluation} from "../../../models/Evaluation";
import {EvaluationService} from "../../evaluation.service";

@Component({
  selector: 'app-add-eval',
  templateUrl: './add-eval.component.html',
  styleUrls: ['./add-eval.component.css']
})
export class AddEvalComponent implements OnInit {

  constructor(
    private evalService : EvaluationService
  ) { }

  eval : Evaluation = new Evaluation()

  ngOnInit(): void {
  }

  save(){
    this.evalService.saveEval(this.eval).subscribe(res => {
      window.location.href = '/#/eval/listEval';
    })
  }

}
