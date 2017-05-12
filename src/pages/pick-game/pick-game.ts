import { Component } from '@angular/core';
import { UsCapitalsPage } from '../us-capitals/us-capitals';
import { WorldCapitalsEasyPage } from "../world-capitals-easy/world-capitals-easy";
import { WorldCapitalsMediumPage } from "../world-capitals-medium/world-capitals-medium";
import { WorldCapitalsHardPage } from "../world-capitals-hard/world-capitals-hard";

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pick-game',
  templateUrl: 'pick-game.html'
})
export class PickGamePage {
  usCapitalsPage = UsCapitalsPage;
  worldCapitalsEasyPage = WorldCapitalsEasyPage;
  worldCapitalsMediumPage = WorldCapitalsMediumPage;
  worldCapitalsHardPage = WorldCapitalsHardPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  launchGamePage(name) {
    let data = {
      usCapitals: {
        path: 'assets/data/us-capitals.json',
        page: UsCapitalsPage
      },
      worldCapitalsEasy: {
        path: 'assets/data/world-capitals-easy.json',
        page: WorldCapitalsEasyPage
      },
      worldCapitalsMedium: {
        path: 'assets/data/world-capitals-medium.json',
        page: WorldCapitalsMediumPage
      },
      worldCapitalsHard: {
        path: 'assets/data/world-capitals-hard.json',
        page: WorldCapitalsHardPage
      }
    };
    this.navCtrl.push(data[name].page, data[name]);
  }

}
