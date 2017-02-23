import { Component} from '@angular/core';
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

  constructor(public navCtrl: NavController) {}

  playUSCapitals() {
    this.navCtrl.push(USCapitalsPage);
  };

  playWorldCapitals() {
    this.navCtrl.push(WorldCapitalsPage);
  };

}
