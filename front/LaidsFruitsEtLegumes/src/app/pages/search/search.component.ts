import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, private Api: ApiService) { }

  error: string = '';
  food: string | null = '';
  localization: string | null = '';
  products: any
  ngOnInit(): void {
    this.food = this.route.snapshot.paramMap.get('food');
    this.localization = this.route.snapshot.paramMap.get('localization');
    this.searchProduct()
  }

  searchProduct() {
    this.Api.searchProduct(this.food, this.localization).subscribe(data => {
      // @ts-ignore
      this.products = data.body.data
      console.log(data)
      // @ts-ignore
      this.results = data.body.data
    })
  }

}
