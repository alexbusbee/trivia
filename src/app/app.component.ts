import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { AuthProvider } from "../providers/auth/auth";

import { LoadingController } from "ionic-angular";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  loader: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth: AuthProvider, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.auth.login().then((isLoggedIn) => {
        if(isLoggedIn) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = LoginPage;
        }
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
