import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PickGamePage } from '../../pages/pick-game/pick-game';
import { Data } from '../../providers/data';
/*
  Generated class for the TriviaCard component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'trivia-card',
  templateUrl: 'trivia-card.html'
})
export class TriviaCardComponent {
    pickGamePage = PickGamePage;
    usTrivia = 'assets/data/us-capitals.json';

    @ViewChild('slides') slides: any;
 
    hasAnswered: boolean = false;
    score: number = 0;
 
    slideOptions: any;
    questions: any;
 
    constructor(public navCtrl: NavController, public dataService: Data) {
 
        this.slideOptions = {
            onlyExternal: true
        };

    }

    ngOnInit() {
        this.dataService.load(this.usTrivia).then((data) => {
 
            data.map((question) => {
 
                let originalOrder = question.answers;
                question.answers = this.randomizeAnswers(originalOrder);
                return question;
 
            });     
 
            this.questions = data;
 
        });
 
    }
 
    nextSlide(){
        this.slides.slideNext();
    }
 
    selectAnswer(answer, question){
 
        this.hasAnswered = true;
        answer.selected = true;

        if(answer.correct){
            this.score++;
            this.nextSlide();
        } else {
            answer.correct = answer.selected;
            setTimeout(() => {
                this.nextSlide();
            }, 3000);
        }
        this.hasAnswered = false;
        answer.selected = false;
    }
 
    randomizeAnswers(rawAnswers: any[]): any[] {
 
        for (let i = rawAnswers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = rawAnswers[i];
            rawAnswers[i] = rawAnswers[j];
            rawAnswers[j] = temp;
        }
 
        return rawAnswers;
 
    }
 
    restartQuiz(){
        this.score = 0;
        this.slides.slideTo(1, 1000);
    }
 
}
