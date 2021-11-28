import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private Api: ApiService) { }

  product: any = {};
  product_id: string | null = '';
  


  ngOnInit(): void {
    this.product_id = this.route.snapshot.paramMap.get('product_id');
    this.Api.retrieveProduct(this.product_id).subscribe(data => {
      // @ts-ignore
      this.product = data.body.data[0]
      console.log(this.product)
    })
  }
}
