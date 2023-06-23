import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  // @ts-ignore
  constructor(private http: HttpClient) {
  }

  getCandidats(): Observable<any> {
    return this.http.get<any>('assets/mock/candidat.json')
  }
}
