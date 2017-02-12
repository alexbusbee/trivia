import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { USCapitalsPage } from '../pages/us-capitals/us-capitals';
import { WorldCapitalsPage } from '../pages/world-capitals/world-capitals';

import { ScoreComponent } from '../components/score/score';
import { TimerComponent } from '../components/timer/timer';
import { TriviaBlockComponent } from '../components/trivia-block/trivia-block';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    USCapitalsPage,
    WorldCapitalsPage,
    ScoreComponent,
    TimerComponent,
    TriviaBlockComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    USCapitalsPage,
    WorldCapitalsPage,
    ScoreComponent,
    TimerComponent,
    TriviaBlockComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
