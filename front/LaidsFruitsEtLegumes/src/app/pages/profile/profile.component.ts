import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../services/api.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private Api: ApiService, private cookie: CookieService) { }

  id: string | null = '';
  address: string = ''
  city: string = ''
  companyName: string = ''
  firstname: string = ''
  lastname: string = ''
  type: string = ''
  idName: string = ''
  seller: boolean = false
  products: any = []
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.Api.getUserById(this.id).subscribe(data => {
      console.log(data)
      // @ts-ignore
      const d = data.body.data;
      this.id = d._id;
      this.firstname = d.firstname;
      this.lastname = d.lastname;
      if (d.type === "seller") {
        this.seller = true;
        this.city = d.city;
        this.address = d.address;
        this.companyName = d.companyName;
      }
      this.Api.getOrdersBySellerId(this.id).subscribe(data => {
        // @ts-ignore
        this.products = data.body.data;
      })
    });
  }
}
