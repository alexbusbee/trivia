import { Component } from '@angular/core';
import { UsCapitalsPage } from '../us-capitals/us-capitals';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pick-game',
  templateUrl: 'pick-game.html'
})
export class PickGamePage {
  usCapitalsPage = UsCapitalsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  launchGamePage(name) {
    let data = {
      usCapitals: {
        path: 'assets/data/us-capitals.json',
        page: UsCapitalsPage
      }
    };
    this.navCtrl.push(data[name].page, data[name]);
  }

}
