import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'trivia',
  templateUrl: 'trivia.html'
})
export class TriviaComponent {
  items: FirebaseListObservable<any[]>;  
 
  constructor(af: AngularFire) {
    this.items = af.database.list('/us-capitals');
  }
}
