import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from "@ionic/storage";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PickGamePage } from '../pages/pick-game/pick-game';
import { UsCapitalsPage } from '../pages/us-capitals/us-capitals';
import { UsNaturalizationPage } from '../pages/us-naturalization/us-naturalization';
import { WorldCapitalsEasyPage } from "../pages/world-capitals-easy/world-capitals-easy";
import { WorldCapitalsMediumPage } from "../pages/world-capitals-medium/world-capitals-medium";
import { WorldCapitalsHardPage } from "../pages/world-capitals-hard/world-capitals-hard";
import { TriviaCardComponent } from '../components/trivia-card/trivia-card'
import { TimerComponent } from "../components/timer/timer";
import { Data } from '../providers/data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PickGamePage,
    UsCapitalsPage,
    UsNaturalizationPage,
    WorldCapitalsEasyPage,
    WorldCapitalsMediumPage,
    WorldCapitalsHardPage,
    TriviaCardComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PickGamePage,
    UsCapitalsPage,
    UsNaturalizationPage,
    WorldCapitalsEasyPage,
    WorldCapitalsMediumPage,
    WorldCapitalsHardPage,
    TriviaCardComponent,
    TimerComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
