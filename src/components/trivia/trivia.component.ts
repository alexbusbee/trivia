import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Trivia } from './trivia';

@Component({
  selector: 'trivia',
  templateUrl: 'trivia.html'
})
export class TriviaComponent {
  game: string;
  trivia: Trivia;
  items: FirebaseListObservable<any[]>; 
  answers: FirebaseListObservable<any[]>; 
 
// TODO add shuffle of answers. Use custom pipe or map to iterate over object
  constructor(af: AngularFire, private navController: NavController, private navParams: NavParams) {
    this.game = navParams.get('game');
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
