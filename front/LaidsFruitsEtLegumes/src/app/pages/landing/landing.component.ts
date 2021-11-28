import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  food: string = '';
  localization: string = '';
  constructor() { }

  submit() {
    console.log(this.food, this.localization);
  }
  ngOnInit(): void {
  }

}
