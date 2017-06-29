import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PickGamePage } from '../pick-game/pick-game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pickGamePage = PickGamePage

  constructor(public navCtrl: NavController) {
    
  }

}
