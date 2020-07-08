import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home-Page',
  templateUrl: './Home-Page.component.html',
  styleUrls: ['./Home-Page.component.css']
})
export class HomePageComponent implements OnInit {
  focus: any;
  focus1: any;
  constructor() { }
  test : Date = new Date();

  ngOnInit() {
  }

}
