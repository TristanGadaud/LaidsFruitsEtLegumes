import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''
  already: boolean = false
  constructor(private Api: ApiService) { }

  ngOnInit(): void {
  }

  submit() {
    if (!this.already)
      this.Api.login(this.email, this.password)
    this.already = true
  }

}
