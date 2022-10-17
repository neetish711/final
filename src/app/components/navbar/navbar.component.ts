import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   public isloggedIn=false;
   user =null;

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
    this.isloggedIn=this.loginService.isLoggedIn();
    this.user=this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isloggedIn=this.loginService.isLoggedIn();
      this.user=this.loginService.getUser();
    })
  }

  logoutUser(){
    this.loginService.logout();
    window.location.reload();
  }

}
