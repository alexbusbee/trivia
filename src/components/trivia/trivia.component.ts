import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'trivia',
  templateUrl: 'trivia.html'
})
export class TriviaComponent {
  @Output() onAnswered = new EventEmitter<boolean>();  
  answered: boolean = false;
 

  constructor() {
    console.log('Hello Trivia Component');
  }

  answer(correctAnswer: boolean) {
    this.onAnswered.emit(correctAnswer);
    this.answered = true;
  }
}
