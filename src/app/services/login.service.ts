import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }

//Current user who is logged in
public getCurrentUser(){
  return this.http.get(`${baseUrl}/current-user`);
}  

//calling the server to generate token
public generateToken(credentials:any){
  //token generate
  return this.http.post(`${baseUrl}/generate-token`,credentials)
}

//for logging in user
public loginUser(token: string){
    localStorage.setItem("token",token);
    return true;
  }


//to check user is logged in
public isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }
    else
    return true;
  }


//for logout the user
public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }


//for getting the token
public getToken(){
    return localStorage.getItem("token");
  }


//set userDetail
public setUser(user: any){
  localStorage.setItem("user",JSON.stringify(user));
}

//getUser
public getUser(){
  let userStr=localStorage.getItem('user');
  if(userStr!=null){
    return JSON.parse(userStr);
  }
  else{
    this.logout();
    return null;
  }
}

//get user role
public getUserRole(){
  let user=this.getUser();
  return user.authorities[0].authority;
}

}
