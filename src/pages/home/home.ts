import { Component } from '@angular/core';
import { Storage } from "@ionic/storage";
import { NavController, AlertController } from 'ionic-angular';

import { PickGamePage } from '../pick-game/pick-game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pickGamePage = PickGamePage;

  val: number;

  constructor(public navCtrl: NavController, private storage: Storage, private alertCtrl: AlertController) {}

  newGame() {
    let i = 1;
    if (i = 1) {

      this.storage.get('plays').then((val) => {
        if (val === null) {
            this.val = 5;
        } else {
            this.val = val;
        }

        let alert = this.alertCtrl.create({
            title: 'You have ' + this.val + ' games remaining today',
            message: 'Sign up for unlimited plays.',
            buttons: [
              {
                text: 'No Thanks',
                handler: () => {
                  this.navCtrl.push(PickGamePage);
                }
              },
              {
                text: 'Sign Up',
                handler: () => {
                  // this.navCtrl.push(PickGamePage);
                }
              }
            ]
        });

        alert.present();

      });

    } else {

      this.navCtrl.push(PickGamePage);
    }
  }
}
