import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evaluation} from "../models/Evaluation";
import {environment} from "../../environments/environment";
import {Candidatures} from "../models/Candidatures";

@Injectable({
  providedIn: 'root'
})
export class CandidaturesService {
  // @ts-ignore
  constructor(private http: HttpClient) {
  }

  getCandidatures(): Observable<any> {
    return this.http.get<Candidatures>('/candidatures')
  }

  saveCandidature(body){
    return this.http.post('/candidatures',body)
  }

  editCandidature(body){
    return this.http.put('/candidatures/'+body.id,body)
  }

  getCandidature(id){
    return this.http.get<Candidatures>('/candidatures/'+id)
  }

  deleteCandidature(id){
    return this.http.delete<any>('/candidatures/'+id)
  }
}
