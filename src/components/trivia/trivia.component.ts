import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { TriviaService } from '../../services/trivia.service';
import { Trivia } from './trivia';

@Component({
  selector: 'trivia',
  templateUrl: 'trivia.html',
  providers: [TriviaService]
})
export class TriviaComponent implements OnInit {
  @Output() onAnswered = new EventEmitter<boolean>();  
  answered: boolean = false;
  trivia: Trivia[];
 
  constructor(private _triviaService: TriviaService) {
    console.log('Hello Trivia Component');
  }

  ngOnInit() {
    this.trivia = [];
    this._triviaService.getTrivia('USCapitals')
      .subscribe(trivia => {
        this.trivia = trivia;
      })
  }

  answer(correctAnswer: boolean) {
    this.onAnswered.emit(correctAnswer);
    this.answered = true;
  }
}
