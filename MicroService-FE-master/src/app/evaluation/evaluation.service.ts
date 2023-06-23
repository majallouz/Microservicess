import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evaluation} from "../models/Evaluation";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  // @ts-ignore
  constructor(private http: HttpClient) {
  }

  getEvaluations(): Observable<any> {
    //return this.http.get<Evaluation>('assets/mock/evaluation.json')
    return this.http.get<Evaluation>('/evaluations')
  }

  saveEval(body){
    return this.http.post('/evaluations',body)
  }

  editEval(body){
    return this.http.put('/evaluations/'+body.id,body)
  }

  getEval(id){
    //return this.http.get<Evaluation>('assets/mock/evaluation_1.json')
    return this.http.get<Evaluation>('/evaluations/'+id)
  }

  deleteEval(id){
    return this.http.delete<any>('/evaluations/'+id)
  }
}
