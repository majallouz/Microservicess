import { Component, OnInit } from '@angular/core';
import { Offers } from 'src/app/models/Offer';
import { OfferService } from '../../offer.service';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements OnInit {

  constructor(private offerService : OfferService) { }
  
    listOffer : Offers []= []

    ngOnInit(): void {
      this.offerService.getOffers().subscribe(res => {
        this.listOffer = res
      })
    }
  
    edit(id) {
      window.location.href = '/#/offer/editOffer?id='+id;
    }
  
    delete(id) {
      this.offerService.deleteOffer(id).subscribe(res => {
        this.ngOnInit()
      })
    }

}
