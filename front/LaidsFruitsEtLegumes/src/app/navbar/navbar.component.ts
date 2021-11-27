import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private Api: ApiService) { }

  logged: boolean = false;
  ngOnInit(): void {
    this.logged = this.Api.isLogged();
  }

}
