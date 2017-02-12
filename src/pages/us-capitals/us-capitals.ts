import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-us-capitals',
  templateUrl: 'us-capitals.html'
})
export class USCapitalsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad USCapitalsPage');
  }

  ngOnInit() {
    let confirm = this.alertCtrl.create({
      title: 'Ready?',
      message: 'You have 60 seconds to answer as many questions as you can.',
      buttons: [
        {
          text: 'Back',
          handler: () => {
            this.navCtrl.popToRoot();
          }
        },
        {
          text: 'Go!',
          handler: () => {
            console.log('Go! clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
