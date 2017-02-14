import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { USCapitalsPage } from '../pages/us-capitals/us-capitals';
import { WorldCapitalsPage } from '../pages/world-capitals/world-capitals';

import { ScoreComponent } from '../components/score/score';
import { TimerComponent } from '../components/timer/timer';
import { TriviaComponent } from '../components/trivia/trivia.component';

import { TriviaService } from '../services/trivia.service';

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
    TriviaComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, TriviaService]
})
export class AppModule {}
