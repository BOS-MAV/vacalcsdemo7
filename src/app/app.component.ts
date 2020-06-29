import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Calculator } from './models/calculator.model';
import * as data from './calculators-data.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [];
  // public calculators: Calculator[];
  // public calculator: Calculator;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // this.calculators = [];
    for (const calc of data.calculators) {
      this.appPages.push({title: calc.name, url: 'calculator/' + calc.id });
      // this.calculators.push(new Calculator(calc));
    }
    this.appPages.push({title: 'About', url: 'about'});
    // this.calculator = this.calculators[0];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }
}
