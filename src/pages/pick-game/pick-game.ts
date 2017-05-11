import { Component } from '@angular/core';
import { UsCapitalsPage } from '../us-capitals/us-capitals';
import { WorldCapitalsPage } from "../world-capitals/world-capitals";

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pick-game',
  templateUrl: 'pick-game.html'
})
export class PickGamePage {
  usCapitalsPage = UsCapitalsPage;
  worldCapitalsPage = WorldCapitalsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  launchGamePage(name) {
    let data = {
      usCapitals: {
        path: 'assets/data/us-capitals.json',
        page: UsCapitalsPage
      },
      worldCapitals: {
        path: 'assets/data/world-capitals.json',
        page: WorldCapitalsPage
      }
    };
    this.navCtrl.push(data[name].page, data[name]);
  }

}
