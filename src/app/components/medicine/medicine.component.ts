import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from 'src/app/med';
import { orderedMedicine } from 'src/app/orderedMedicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  medicine:Medicine[];
  or=new orderedMedicine();
  private baseUrl = "http://localhost:8080";
  constructor(private med:MedicineService,private http:HttpClient) { }

  // cartMeds:Array<Medicine>=[];
  ngOnInit(): void {
  }

  public getMedicines():void{
    this.med.getMedicines().subscribe(
      (response:Medicine[])=>{
        this.medicine=response; 
      },
      (error:HttpErrorResponse)=>{
       console.log(error);
      }
    )
  }
}
//   getMedicineDetails():Observable<any>{
//     return this.http.get(this.baseUrl).pipe(new Map(medicine => medicine.map(medicine.medicineId)));
//   }

// function getMedicineDetails() {
//   throw new Error('Function not implemented.');
// }
  // addMedicinesToCart(a){
    
    // this.cartItems.push(a);
   // this.or.medicineName=a;
   // this.or.medicineId=b;
   // this.or.medicineCost=c;
    // this.or=a;
    // this.serv.cartMeds.push(a);
    //console.log(this.serv.cartMeds); 
   
    // console.log(this.serv.cartMeds);
   // this.serv.cartMeds.push(a);
   // let sb=b;
   // let gf=c;
   // let vc=a;
   // this.serv.cartMeds.push(vc);
  //  this.serv.cartMeds.push(gf);
  //  this.serv.cartMeds.push(sb);
  // this.serv.cartMeds.push(a);
 //   console.log(this.serv.cartMeds);
   // console.log(vc);
   // this.cartMeds.push(vc);
  //  console.log(this.cartMeds);
   // this.serv.cartMeds.p
   // console.log(a);
    //console.log(a);

//   addToCart(pid,pname,pcost){
//     let cart=localStorage.getItem("cart");
//     if(cart==null){
//       //no cart
//       let products=[];
//       let product={
//         medicineId:pid,
//         medicineName:pname,
//         quantity:1,
//         medicineCost:pcost
//       }
//       products.push(product);
//       localStorage.setItem("cart",JSON.stringify(products));
//       console.log("Product is added for first time");
//     }else{
//       //cart already present
//       let medCart=JSON.parse(cart);
//       let oldProduct=medCart.find((item)=>{
//         item.medicineId==pid
//       })
//       if(oldProduct){
//         //increase quantity
//         oldProduct.quantity=oldProduct.quantity+1
//         medCart.map((item)=>{
//           if(item.medicineId==oldProduct.medicineId){
//             item.quantity=oldProduct.quantity;
//           }
//         })
//         localStorage.setItem("cart",JSON.stringify(medCart));
//         console.log("Product quantity is increased");

//       }else{
//         //we have to add medicine to cart
//         let product={medicineId:pid,medicineName:pname,medicineCost:pcost};
//         medCart.push(product);
//         localStorage.setItem("cart",JSON.stringify(medCart));
//         console.log("Product is added");

//       }
//     }
//   }

// }
