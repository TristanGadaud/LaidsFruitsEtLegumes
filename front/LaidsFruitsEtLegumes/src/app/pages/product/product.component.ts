import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private Api: ApiService, private route: ActivatedRoute) { }

  id: string | null = '';
  seller_id: string = '';
  title: string = '';
  description: string = '';
  seller_firstname: string = '';
  seller_lastname: string = '';
  seller_location: string = '';
  price: string = '';
  pic_url: string = '';
  in_stock: string = '';

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.Api.getProductById(this.id).subscribe(data => {

      // @ts-ignore
      const d = data.body.data[0];
      // @ts-ignore
      this.seller_id = d.seller_id;
      // @ts-ignore
      this.title = d.title;
      // @ts-ignore
      this.description = d.description;
      // @ts-ignore
      this.seller_firstname = d.seller_firstname;
      // @ts-ignore
      this.seller_lastname = d.seller_lastname;
      // @ts-ignore
      this.seller_location = d.seller_location;
      // @ts-ignore
      this.price = d.price;
      // @ts-ignore
      this.pic_url = d.pic_url
      // @ts-ignore
      this.in_stock = d.in_stock
    })
  }


}
