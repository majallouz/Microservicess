import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../../candidat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private condidateService : CandidatService
  ) { }

  candidats : any [] = []

  ngOnInit(): void {
    this.condidateService.getCandidats().subscribe(res => {
      console.log(res)
      this.candidats = res;
    })
  }

}
