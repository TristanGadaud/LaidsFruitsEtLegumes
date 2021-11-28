import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private Api: ApiService, private cookie: CookieService, private router: Router) { }

  logged: boolean = false;
  id: string = '';
  seller: boolean = false;
  url: string = ''
  ngOnInit(): void {
    console.log(this.id)
    this.logged = this.Api.isLogged();
    this.Api.getNameFromToken(this.cookie.get('access_token')).subscribe(data => {
      // @ts-ignore
      this.id = data.body.datas._id;
      // @ts-ignore
      this.url = data.body.datas.pic_url;
      // @ts-ignore
      if (data.body.datas.type === "seller") {
        this.seller = true;
      }
    })

  }
  logout() {
    this.Api.logout()
  }

  getToProfile() {
    this.router.navigate(['/profile/' + this.id]).then(() =>
      location.reload()
    )
  }
}
