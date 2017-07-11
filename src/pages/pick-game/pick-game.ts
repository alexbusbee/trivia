import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsCapitalsPage } from '../us-capitals/us-capitals';
import { UsNaturalizationPage } from '../us-naturalization/us-naturalization';
import { WorldCapitalsEasyPage } from "../world-capitals-easy/world-capitals-easy";
import { WorldCapitalsMediumPage } from "../world-capitals-medium/world-capitals-medium";
import { WorldCapitalsHardPage } from "../world-capitals-hard/world-capitals-hard";
import { HomePage } from "../home/home";

@Component({
  selector: 'page-pick-game',
  templateUrl: 'pick-game.html'
})
export class PickGamePage {
  usCapitalsPage = UsCapitalsPage;
  usNaturalizationPage = UsNaturalizationPage;
  worldCapitalsEasyPage = WorldCapitalsEasyPage;
  worldCapitalsMediumPage = WorldCapitalsMediumPage;
  worldCapitalsHardPage = WorldCapitalsHardPage;
  homePage = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  launchGamePage(name) {
    let data = {
      usCapitals: {
        path: 'assets/data/us-capitals.json',
        page: UsCapitalsPage,
        title: 'U.S. Capitals',
        description: 'Select the correct capital city for each state.'
      },
      usNaturalization: {
        path: 'assets/data/us-naturalization.json',
        page: UsNaturalizationPage,
        title: 'U.S. Naturalization',
        description: 'Select the correct answer for each question from the U.S. Naturalization civic test.'
      },
      worldCapitalsEasy: {
        path: 'assets/data/world-capitals-easy.json',
        page: WorldCapitalsEasyPage,
        title: 'World Capitals (Easy)',
        description: 'Select the correct capital city for each country.'
      },
      worldCapitalsMedium: {
        path: 'assets/data/world-capitals-medium.json',
        page: WorldCapitalsMediumPage,
        title: 'World Capitals (Medium)',
        description: 'Select the correct capital city for each country.'
      },
      worldCapitalsHard: {
        path: 'assets/data/world-capitals-hard.json',
        page: WorldCapitalsHardPage,
        title: 'World Capitals (Hard)',
        description: 'Select the correct capital city for each country.'
      }
    };
    
    this.navCtrl.push(data[name].page, data[name]);
  }

}
