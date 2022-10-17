import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { Customer } from '../models/Customer.model';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private fb:FormBuilder,private httpClient: HttpClient,private cdr: ChangeDetectorRef,
    private loginService:LoginService) { }

  ngAfterViewChecked(){
   this.cdr.detectChanges();
}
   currentCustomer = new Customer();
    user:any;
  ngOnInit(): void {
    this.user=this.loginService.getUser();
    // console.log(this.user.username);
     this.httpClient.get<any>("http://localhost:8080/user/"+this.user.username)
      .subscribe((data:any) => {
        console.log(data);
        this.currentCustomer.username=data.username;
        this.currentCustomer.email=data.email;
        this.currentCustomer.password=data.password;
        this.currentCustomer.address=data.address;
        this.currentCustomer.mobile=data.mobile;
        this.currentCustomer.id=data.id;
        // console.log(data)
      })
  }

   get username() {
    return this.myForm.controls.username;
  }

  get email() {
    return this.myForm.controls.email;
  }

  get mobile() {
    return this.myForm.controls.mobile;
  }
  
  myForm = this.fb.group({
    username:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
    mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    address:['']
  })

  // ask gopi to set a cookie in sessionstorage for username
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  onSubmit(){
    this.myForm.value['id'] = this.currentCustomer.id;
    this.myForm.value['password'] = this.currentCustomer.password;

    console.log(this.myForm.value);
    this.httpClient.put<any>("http://localhost:8080/user/update", this.myForm.value, this.httpOptions)
      .subscribe((data) => {
        // console.log(data);
        Swal.fire(
        'Successful!',
        'Your profile has been updated.',
        'success'
      )
      },
      (err)=>{
        console.log(err);
        Swal.fire(
        'Cancelled',
        'Some error occured, please try again!!!)',
        'error'
      )
      })
  }
}
