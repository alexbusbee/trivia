import { Component } from '@angular/core';
import { PickGamePage } from '../pick-game/pick-game';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pickGamePage = PickGamePage

  constructor(public navCtrl: NavController) {
    
  }

}
