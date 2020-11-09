import { Component, OnInit } from '@angular/core';
import { LawService } from '../law.service';

@Component({
  selector: 'app-age-class',
  templateUrl: './age-class.component.html',
  styleUrls: ['./age-class.component.scss']
})
export class AgeClassComponent implements OnInit {

  constructor(private lawService:LawService) { }

  ngOnInit() {
    // this.lawService.getAllAgeData().subscribe(
    //     data =>{
    //       console.log("-------------data",data);
    //     }
    // )
  }

}
