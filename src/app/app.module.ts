import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { USCapitalsPage } from '../pages/us-capitals/us-capitals';
import { WorldCapitalsPage } from '../pages/world-capitals/world-capitals';

import { ScoreComponent } from '../components/score/score';
import { TimerComponent } from '../components/timer/timer';
import { TriviaComponent } from '../components/trivia/trivia.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDasO-v4gAdQTBCJUqqJGx-Di8-YnPLhDc',
  authDomain: 'trivia-5c132.firebaseapp.com',
  databaseURL: 'https://trivia-5c132.firebaseio.com',
  storageBucket: 'trivia-5c132.appspot.com',
  messagingSenderId: '602266621249'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    USCapitalsPage,
    WorldCapitalsPage,
    ScoreComponent,
    TimerComponent,
    TriviaComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    USCapitalsPage,
    WorldCapitalsPage,
    ScoreComponent,
    TimerComponent,
    TriviaComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
