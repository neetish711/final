import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../med';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  constructor(private http : HttpClient) { }
  
  getMedicines():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(`${baseUrl}/medicines`);
  }
  addMedicine(medicine:Medicine):Observable<Medicine>{
    return this.http.post<Medicine>(`${baseUrl}/medicine`,medicine);
  }
  updateMedicine(medicine : Medicine):Observable<Medicine>{
    return this.http.put<Medicine>(`${baseUrl}/medicine/medicine`,medicine);
  }
  deleteMedicine(medicineId:string):Observable<Medicine>{
    return this.http.delete<Medicine>(`${baseUrl}/medicines/${medicineId}`);
  }
}
