import { Component, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

import { USCapitalsPage } from '../us-capitals/us-capitals';
import { WorldCapitalsPage } from '../world-capitals/world-capitals';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usCapitalsPage = USCapitalsPage;
  worldCapitalsPage = WorldCapitalsPage;
  @Output() game: string;

  constructor(public navCtrl: NavController) {}

  playUSCapitals() {
    this.navCtrl.push(USCapitalsPage);
    this.game = 'us-capitals';
  };

  playWorldCapitals() {
    this.navCtrl.push(WorldCapitalsPage);
    this.game = 'world-capitals';
  };

}
