import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Api: ApiService) { }

  formDisplay: boolean = true;
  formBuyerDisplay: boolean = false;
  formSellerDisplay: boolean = false;

  firstname: string = '';
  lastname: string = '';
  buyerOrSeller: string = '';
  companyName: string = '';
  address: string = '';
  city: string = '';
  email: string = '';
  password: string = '';


  ngOnInit(): void {
  }

  register() {
    this.Api.register(this.firstname, this.lastname, this.companyName, this.buyerOrSeller, this.address, this.city, this.email, this.password)
  }

}
