import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isLogin:boolean = false;
  constructor(private router:Router){}
  ngOnInit(): void {
    if (sessionStorage.getItem("user") && sessionStorage.getItem("password")){
      this.isLogin = true;
    }
  }
  nzChangeLogin(sucess){
    this.isLogin = true;
    this.router.navigate(
      ["/index"]
    )
  }
  title = 'my-app';
}
