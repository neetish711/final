import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/med';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  medicine:Medicine = new Medicine();
  constructor(private med:MedicineService,private router:Router) { }

  addMedicine(){
    this.med.addMedicine(this.medicine).subscribe(
      data=>{
        console.log(data)
        // this.goToMedicineList();
      },
      error=>{
        console.log(error);
      }
    )
  }
 
//  goToMedicineList(){
//   this.router.navigate(['/add-medicine']);
//  }
 addToCart(){

 }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.medicine);
    this.addMedicine();
   


}
}
