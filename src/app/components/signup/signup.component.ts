import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import baseUrl from 'src/app/services/helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }



  myForm=this.fb.group({
    un:['',],
    pwd:['',[Validators.minLength(5)]]
    // confirmPwd:['',[Validators.minLength(5)]]
  })
 

  credentials={
    username:'',
    password:''
    }


  // httpOptions={
  //   headers:new HttpHeaders({'content-type':'application/json'})
  // }
  saveData(){
    
    this.credentials.username=this.myForm.value.un;
    this.credentials.password=this.myForm.value.pwd;
    // if(this.myForm.value.confirmPwd?.length==this.myForm.value.password?.length){
      // if(this.myForm.value.confirmPwd==this.myForm.value.password){
      //   confirm("Do you really want to register")
        this.httpClient.post<any>(`${baseUrl}/user`,this.credentials).subscribe((data)=>console.log(data));
      
        this.router.navigate(['/login']);
        return true;
      }
      // else{
      //   alert("Password not matches");
      //   return false;
      // }
    // }
    // else{
    //   alert("Password not matches")
    //   return false;
    // }

  get un():FormControl{
    return this.myForm.get("un") as FormControl;
  }
  get pwd():FormControl{
    return this.myForm.get('pwd') as FormControl;
  }
//   get confirmPassword():FormControl{
//     return this.myForm.get('confirmPwd') as FormControl;
//   }
// }
}
