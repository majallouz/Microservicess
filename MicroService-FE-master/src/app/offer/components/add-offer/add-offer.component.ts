import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../offer.service';
import {Offers} from "../../../models/Offer";
@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  constructor(private offerService : OfferService) { }
  
    offer : Offers = new Offers()
  
    ngOnInit(): void {
    }
  
    save(){
      this.offerService.saveOffer(this.offer).subscribe(res => {
        window.location.href = '/#/offer/listOffer';
      })
    }
  }
  
