import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PickGamePage } from '../pages/pick-game/pick-game';
import { UsCapitalsPage } from '../pages/us-capitals/us-capitals';
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
    WorldCapitalsEasyPage,
    WorldCapitalsMediumPage,
    WorldCapitalsHardPage,
    TriviaCardComponent,
    TimerComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PickGamePage,
    UsCapitalsPage,
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
