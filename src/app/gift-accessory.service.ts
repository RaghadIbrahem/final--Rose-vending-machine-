import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GiftAccessoryService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  getAllGiftAccessories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/AllGiftAccessories`);
  }
  getGiftAccessoryById(id: string|null): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GiftAccessoryById/${id}`);
  }
  createGiftAccessory(giftAccessory: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createGiftAccessory`, giftAccessory);
  }
}
