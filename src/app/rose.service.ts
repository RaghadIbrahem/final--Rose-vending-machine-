import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RoseService {
  private readonly API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllRoses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/all-roses`);
  }

  getRoseById(id: string | null): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/By-Rose-ID/${id}`);
  }

  createRose(rose: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/create-rose`, rose);
  }

  updateRose(rose: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/update-rose/${rose.id}`, rose);
  }

  deleteRose(id: string | null): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/delete-rose/${id}`);
  }
  
}
