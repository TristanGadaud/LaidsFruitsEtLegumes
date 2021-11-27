import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  search: string = '';
  constructor() { }

  submit() {
    console.log(this.search);
  }
  ngOnInit(): void {
  }

}
