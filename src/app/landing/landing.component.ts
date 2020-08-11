import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../calculators-data.json';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public appPages = [];
  public selectedIndex = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    for (const calc of data.calculators) {
      this.appPages.push({title: calc.name, url: 'calculator/' + calc.id });
    }
    this.appPages.push({title: 'About', url: 'about'});
  }

  onClick(e) {
    this.router.navigate([e.url]);
  }

}
