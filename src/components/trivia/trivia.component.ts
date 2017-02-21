import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Component({
  selector: 'trivia',
  templateUrl: 'trivia.html'
})
export class TriviaComponent {
  items: FirebaseListObservable<any[]>;  
 
  constructor(af: AngularFire) {
    this.items = <FirebaseListObservable<any>> af.database
      .list('/us-capitals')
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
