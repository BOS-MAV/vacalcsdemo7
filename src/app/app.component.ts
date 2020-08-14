import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LandingComponent } from './landing/landing.component';
import { Subscription } from 'rxjs';
import * as data from './calculators-data.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [];
  private menuChange: Subscription;

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
    }
    this.appPages.push({title: 'About', url: 'about'});
  }

  onActivate(component) {
    if (component instanceof LandingComponent) {
        this.menuChange = component.menuItemChange.subscribe(_ => this.selectedIndex = _);
    }
  }

  onDeactivate() {
    if (this.menuChange) {
        this.menuChange.unsubscribe();
    }
  }
}
