import { Component} from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: 'score.html'
})
export class ScoreComponent {
  score: number = 0;

  constructor() {
    console.log('Hello Score Component');
  }

  onAnswered(correctAnswer: boolean) {
    if (correctAnswer = true) {
      this.score += 1; 
    }
  }
}
