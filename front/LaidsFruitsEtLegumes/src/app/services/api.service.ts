import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  apiBase = '';
  authCookie = this.cookie.get('auth-token');
  httpOptions = {headers: {'Content-Type': 'application/json', 'auth-token': this.authCookie}, observe: 'response' as 'response'};

  login(email: string, password: string) {
    const body = JSON.stringify({email: email, password: password});
    return this.http.post<any>(this.apiBase + 'user/login', body, this.httpOptions);
  }
  registerBuyer(name: string, email: string, password: string) {
    const body = JSON.stringify({name: name, email: email, password: password});
    return this.http.post<any>(this.apiBase + 'user/register', body, this.httpOptions);
  }
  registerSeller(name: string, email: string, password: string) {
    const body = JSON.stringify({name: name, email: email, password: password});
    return this.http.post<any>(this.apiBase + 'user/register', body, this.httpOptions);
  }
}
