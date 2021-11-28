import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private Api: ApiService) { }

  query: string = '';
  location: string = '';
  results: any = [];
  error: string = '';
  ngOnInit(): void {
  }

  searchProduct() {
    // this.query = data.body.datas.query
    this.Api.searchProduct(this.query, this.location).subscribe(data => {
      console.log(data)
      // @ts-ignore
      this.results = data.body.data
    })
  }

}
