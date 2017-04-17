import { Component } from '@angular/core';
import { UsCapitalsPage } from '../us-capitals/us-capitals';

import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PickGame page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pick-game',
  templateUrl: 'pick-game.html'
})
export class PickGamePage {
  usCapitalsPage = UsCapitalsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
