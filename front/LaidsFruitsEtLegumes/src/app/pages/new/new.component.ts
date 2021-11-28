import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private Api: ApiService) { }

  description: string = ''
  in_stock: string = ''
  price: string = ''
  title: string = ''
  pic_url: string = ''
  ngOnInit(): void {
  }

  postOrder() {
    this.Api.postOrder(this.title, parseFloat(this.in_stock), parseFloat(this.price), this.description, this.pic_url).subscribe((data) => {
      console.log(data)
    })
  }

}
