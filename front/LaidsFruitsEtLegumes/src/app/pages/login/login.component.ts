import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { CookieService } from "ngx-cookie-service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''
  already: boolean = false
  token: string = ''
  constructor(private Api: ApiService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.Api.login(this.email, this.password).subscribe(data => {
      if (data.body['access_token']) {
        this.cookie.set('access_token', data.body['access_token']);
        this.router.navigate(['/']).then(() => {
          location.reload()
        });
      }

    })
  }

}
