import { Component } from '@angular/core';

/*
  Generated class for the TriviaBlock component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'trivia-block',
  templateUrl: 'trivia-block.html'
})
export class TriviaBlockComponent {

  text: string;

  constructor() {
    console.log('Hello TriviaBlock Component');
    this.text = 'Hello World';
  }

}
