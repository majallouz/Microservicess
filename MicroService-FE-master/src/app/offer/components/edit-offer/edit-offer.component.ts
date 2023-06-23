import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offers } from 'src/app/models/Offer';
import { OfferService } from '../../offer.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {

  constructor(private route: ActivatedRoute,private offerService : OfferService) { }
  
  offer : Offers = new Offers()

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params["id"]){
        this.offerService.getOffer(params["id"]).subscribe(res => {
          this.offer = res
        })
      }
    });
  }

  save(){
    this.offerService.editOffer(this.offer).subscribe(res => {
      window.location.href = '/#/offer/listOffer';
    })
  }
}