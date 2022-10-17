import { orderedMedicine } from "./orderedMedicine";

export class Order {
    orderId: number;
    orderDate : Date;
    dispatchDate : Date;
    cost : Number;
    medicineList : orderedMedicine[];
}