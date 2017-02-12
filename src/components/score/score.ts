import { Component } from '@angular/core';

/*
  Generated class for the Score component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'score',
  templateUrl: 'score.html'
})
export class ScoreComponent {

  text: string;

  constructor() {
    console.log('Hello Score Component');
    this.text = 'Hello World';
  }

}
