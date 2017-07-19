import { Component } from '@angular/core';
import { Storage } from "@ionic/storage";
import { NavController, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  homePage = HomePage;

  constructor(public navCtrl: NavController, private storage: Storage, private alertCtrl: AlertController) {}

}
