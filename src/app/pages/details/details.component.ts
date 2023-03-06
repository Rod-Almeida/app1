import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from '../breaking-bad/breaking-bad.service';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: any;
  storage: any;

  constructor(
    private service: BreakingBadService
  ) { }

  ngOnInit(): void {
    this.storage = localStorage.getItem('detalhes')
    console.log(this.storage)
    let json = JSON.parse(this.storage)
    console.log(json)
    this.service.getCharacterDetails(this.storage.char_id).subscribe( res => {
console.log('res: ', res)
    })

  }

}
