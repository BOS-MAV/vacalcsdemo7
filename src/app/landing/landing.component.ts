import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() menuItemChange = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    for (const calc of data.calculators) {
      this.appPages.push({title: calc.name, url: 'calculator/' + calc.id });
    }
    this.appPages.push({title: 'About', url: 'about'});
  }

  onClick(e, i) {
    this.router.navigate([e.url]);
    this.menuItemChange.emit(i);
  }
}
