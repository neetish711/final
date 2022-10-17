import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router, private readonly fb: FormBuilder) { 
  }
  ngOnInit(): void{
  }


  myForm=this.fb.group({
    email:[''],
    pwd:['',[Validators.minLength(5)]]
  })

  get email():FormControl{
    return this.myForm.get("email") as FormControl;
  }
  get pswd():FormControl{
    return this.myForm.get('pwd') as FormControl;
  }


  credentials={
    username:'',
    password:''
    }

  onSubmit(){

    this.credentials.username=this.myForm.value.email;
    this.credentials.password=this.myForm.value.pwd;
    console.log("form is submitted");
    alert("Login Successful");
    //  if(this.credentials.username!='' && this.credentials.password!='' && this.credentials.username!=null && this.credentials.password!=null){
      console.log("We have to submit our form to our server");
      //Generate token here
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //success
          console.log(response.token);
          this.loginService.loginUser(response.token);

          this.loginService.getCurrentUser().subscribe(
            (user:any)=>{
              this.loginService.setUser(user);
              console.log(user);
              //redirect...ADMIN:admin-dasshboard
              //redirect...Customer:Customer-Dashboard

              if(this.loginService.getUserRole()=="ADMIN"){
                //admin dashboard
                // window.location.href="/admin";
                this.router.navigate(['admin']);
                this.loginService.loginStatusSubject.next(true);
              }
              else if(this.loginService.getUserRole() == "Customer"){
                //normal dashboard
                // window.location.href="/user-dashboard";
                this.router.navigate(['user-dashboard']);
                this.loginService.loginStatusSubject.next(true);
              }
              else{
                this.loginService.logout();
              }


            }
          );
          //window.location.href="/dashboard"
        },
        error=>{
          //fail
          console.log(error);
        }
      )
    }
  //    else{
  //     console.log("fields are empty !!");
  //    }

  // }


 
}