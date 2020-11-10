import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private backurl:string;
  itemDetail:{"case_no":""};
  constructor(private acrouter:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.acrouter.queryParams.subscribe(
      params =>{
        console.log("params222",params);
        this.backurl = params["from"];
        this.itemDetail = JSON.parse(params["item"]);
        console.log("this.itemDetail",this.itemDetail);
      }
    )
  }
  goBack(){
    this.router.navigate([this.backurl]);
  }
}
