import { Component } from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: 'score.html'
})
export class ScoreComponent {
  score: number = 0;

  constructor() {
    console.log('Hello Score Component');
  }

  increaseScore() {
    this.score += 1; 
  }
}
