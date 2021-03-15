import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientReview } from './interfaces/clients.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  getClientReviews(): Observable<ClientReview[]> {
    return this.http.get<ClientReview[]>('/assets/data/clientReviews.json');
  }
}
