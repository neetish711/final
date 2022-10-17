import { Injectable } from '@angular/core';
import { Order } from '../order';

@Injectable({
  providedIn: 'root'
})
export class ObjService {

  order =new Order();
  constructor() { }
}
