import { Component, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Trivia } from './trivia';

@Component({
  selector: 'trivia',
  templateUrl: 'trivia.html'
})
export class TriviaComponent {
  @Input() game: string;
  trivia: Trivia;
  items: FirebaseListObservable<any[]>;  
 
// TODO Input/Output possibly sending data after constructor, so game is undefined at construct time. AF must be in constructor 
  constructor(af: AngularFire) {
    this.items = <FirebaseListObservable<any>> af.database
      .list('/' + this.game)
      .map(items => {
        function shuffle(a) {
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }
        }
        shuffle(items);
        return items;
      })
  }
}
