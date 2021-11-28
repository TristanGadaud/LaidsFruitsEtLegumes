import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Api: ApiService, private router: Router) { }

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
  pic_url: string = '';
  error: string = '';

  ngOnInit(): void {
  }

  back(){
    this.formSellerDisplay = false;
    this.formBuyerDisplay = false;
    this.formDisplay = true;
  }
  onBuyerDisplayClick(){
    this.formDisplay = false
    this.formBuyerDisplay = true
    this.buyerOrSeller = "buyer"
  }
  onSellerDisplayClick(){
    this.formDisplay = false
    this.formSellerDisplay = true
    this.buyerOrSeller = "seller"
  }

  register() {
    console.log(this.email, this.password, this.firstname, this.lastname, this.address, this.city, this.buyerOrSeller)
    this.Api.register(this.firstname, this.lastname, this.companyName, this.buyerOrSeller, this.address, this.city, this.email, this.password, this.pic_url).subscribe(data => {
      this.router.navigate(['/'])
      }, () => {
      this.error = "L'utilisateur existe déjà";
    })
  }

}
