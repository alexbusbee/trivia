import { Component } from '@angular/core';

@Component({
  selector: 'trivia-block',
  templateUrl: 'trivia-block.html'
})
export class TriviaBlockComponent {
  question: string;
  correct: string;
  wrongOne: string;
  wrongTwo: string;
  wrongThree: string;

  constructor() {
    console.log('Hello TriviaBlock Component');
    this.correct = '';
  }
}
