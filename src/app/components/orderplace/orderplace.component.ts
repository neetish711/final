import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order';
import { ObjService } from 'src/app/services/obj.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orderplace',
  templateUrl: './orderplace.component.html',
  styleUrls: ['./orderplace.component.css']
})
export class OrderplaceComponent implements OnInit {

  constructor( private orderServ : OrderService,private objserv : ObjService) { }

  ngOnInit(): void {
    this.addOrder();
  }

  ord = this.objserv.order;
  
   public addOrder(): void {
    this.orderServ.addOrder(this.ord).subscribe(
      (response: Order) => {
        console.log(response);
        this.addOrder();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
