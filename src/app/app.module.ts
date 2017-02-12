import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { USCapitalsPage } from '../pages/us-capitals/us-capitals';
import { WorldCapitalsPage } from '../pages/world-capitals/world-capitals';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    USCapitalsPage,
    WorldCapitalsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    USCapitalsPage,
    WorldCapitalsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
