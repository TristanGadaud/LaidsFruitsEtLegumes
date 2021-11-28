import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  food: string = '';
  localization: string = '';
  constructor(private router: Router) { }

  submit() {
    this.router.navigate(['/search/' + this.food + '/' + this.localization])
  }

  ngOnInit(): void {
  }

}
