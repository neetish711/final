import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders : Order[] ;
  constructor(private orderServ : OrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  public getOrder():void{
    this.orderServ.getOrders().subscribe(
      (response:Order[])=>{
        this.orders=response; 
      },
      (error:HttpErrorResponse)=>{
       console.log(error);
      }
    )
  }

}
