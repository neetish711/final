import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order';
import { ObjService } from 'src/app/services/obj.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  order =new Order;
  constructor(private objser : ObjService) { }

  ngOnInit(): void {
    this.totalCost();
  }
  now =new Date();

  mediList= [{ 'medicineId': 1, 'medicineName': 'A' ,'medicineCost': 250},
  { 'medicineId': 2, 'medicineName': 'B' ,'medicineCost': 650},
  { 'medicineId': 3, 'medicineName': 'C' ,'medicineCost': 750},]
   
  cost :number;
  totalCost(){
    let sum =0;
    for(let i=0; i<this.mediList.length; i++){
      sum= sum +this.mediList[i].medicineCost;
    }
     this.cost=sum;

  }
  
  place_order(){
    this.objser.order.orderId= Math.floor(Math.random() * 1000) + 1;;
    this.objser.order.orderDate=new Date();
    this.objser.order.dispatchDate=new Date(this.now.setDate(this.now.getDate() +3));
    this.objser.order.cost=this.cost;
    this.objser.order.medicineList=this.mediList;
  }
}

