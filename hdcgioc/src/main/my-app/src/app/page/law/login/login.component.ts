import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() nzChangeLogin = new EventEmitter<string>(); 
  login: { username?: string, password?: string } = {};
  constructor(private modal: NzModalService) { }
  
  ngOnInit() {
    // sessionStorage.get("username").then((val) => {
    //   this.login.username = val;
    // });
    // sessionStorage.get("password").then((val) => {
    //   this.login.password = val;
    // });
  }
  doLogin(){
    var login = true;
    console.log("this.login",this.login);
    if (this.login.username != 'admin') {
          login = false;
    }
    if (this.login.password != 'admin'){
          login = false;
    }
    if (login) {
      this.nzChangeLogin.emit("success")
      sessionStorage.setItem("user",this.login.username);
      sessionStorage.setItem("password",this.login.password);
    } else {
      this.showConfirm();
    }
  }
  showConfirm(): void {
    this.modal.confirm({
      nzTitle: '用户名或密码输入错误,请重新输入',
      nzOnOk: () =>{}
    });
  }


  myKeyup(e){ //回撤登录
    let keycode = window.event?e.keyCode:e.which; 
    if(keycode==13){
        this.doLogin();
      }
  }

}
