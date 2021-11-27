import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  apiBase = 'http://104.248.134.123:3000/';
  authCookie = this.cookie.get('access_token');
  httpOptions = {headers: {'Content-Type': 'application/json'}, observe: 'response' as 'response'};
  login(email: string, password: string) {
    console.log("test")
    const body = JSON.stringify({email: email, password: password});
    return this.http.post<any>(this.apiBase + 'api/auth/signin', body, this.httpOptions)
  }
  register(firstname: string, lastname: string, companyName: string, buyerOrSeller: string, address: string, city: string, email: string, password: string) {
    const body = JSON.stringify({firstname: firstname, lastname: lastname, companyName: companyName, type: buyerOrSeller, address: address,
      city: city, email: email, password: password});
    return this.http.post<any>(this.apiBase + 'api/auth/signup', body, this.httpOptions)
  }
  isLogged() {
    return this.cookie.check('access_token')
  }
}
