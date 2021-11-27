import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiBase = '';
  httpOptions = {headers: {'Content-Type': 'application/json'}, observe: 'response' as 'response'};

  login(email: string, password: string) {
    const body = JSON.stringify({email: email, password: password});
    return this.http.post<any>(this.apiBase + 'auth/signin', body, this.httpOptions);
  }
  register(firstname: string, lastname: string, companyName: string, buyerOrSeller: string, address: string, city: string, email: string, password: string) {
    const body = JSON.stringify({firstname: firstname, lastname: lastname, companyName: companyName, type: buyerOrSeller, address: address,
      city: city, email: email, password: password});
    return this.http.post<any>(this.apiBase + 'auth/signup', body, this.httpOptions);
  }
}
