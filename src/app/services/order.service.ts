import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../order';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private http:HttpClient) { }

  public getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${baseUrl}/customer/allorders`);
  }

  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${baseUrl}/customer/order`, order);
  }
  public deleteOrder(orderId: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/customer/order/${orderId}`);
  }
}
