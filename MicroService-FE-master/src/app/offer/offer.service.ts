import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Offers } from '../models/Offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  // @ts-ignore
  constructor(private http: HttpClient) {
  }
  getOffers(): Observable<any> {
    return this.http.get<Offers>('/offres')
  }

  saveOffer(body){
    return this.http.post('/offres',body)
  }

  editOffer(body){
    return this.http.put('/offres'+body.id,body)
  }

  getOffer(id){
    return this.http.get<Offers>('/offres'+id)
  }

  deleteOffer(id){
    return this.http.delete<any>('/offres'+id)
  }
}
