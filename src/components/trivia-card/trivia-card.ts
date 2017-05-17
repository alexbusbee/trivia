import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { UsCapitalsPage } from "../../pages/us-capitals/us-capitals";
import { HomePage } from '../../pages/home/home';
import { TimerComponent } from "../timer/timer";
import { Data } from '../../providers/data';

@Component({
  selector: 'trivia-card',
  templateUrl: 'trivia-card.html'
})
export class TriviaCardComponent {
    homePage = HomePage;
    usCapitalsPage = UsCapitalsPage;
    usTrivia = 'assets/data/us-capitals.json';

    @ViewChild('slides') slides: any;
    @ViewChild(TimerComponent) timerComponent: TimerComponent;
 
    hasAnswered: boolean = false;
    score: number = 0;
 
    slideOptions: any;
    questions: any;
    slideCount: number;
 
    constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data, public events: Events) {
 
        this.slideOptions = {
            onlclickyExternal: true,
        };

    }

    ngOnInit() {
        let trivia = this.navParams.get('path');
        this.dataService.load(trivia).then((data) => {
 
            data.map((question) => {
 
                let originalQuestionOrder = data;
                data = this.randomize(originalQuestionOrder);
 
                let originalAnswerOrder = question.answers;
                question.answers = this.randomize(originalAnswerOrder);
                return question;

            });     
 
            this.questions = data;
 
        });
    }

    nextSlide(){
        this.slides.slideNext();
        let isLastSlide = this.slides.isEnd();
        if(TimerComponent && isLastSlide) {
          this.events.publish('timer:stop');
        }
    }

    start(){
        this.nextSlide();
        if(TimerComponent) {
          this.events.publish('timer:start');

            this.events.subscribe('timer:done', () => {
                let lastSlide = this.slides.length();
                this.slides.slideTo(lastSlide, 100);
                this.events.unsubscribe('timer:done');
            })
        }
    }
 
    selectAnswer(answer, question){
 
        this.hasAnswered = true;
        answer.selected = true;

        if (answer.correct) {
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
 
    randomize(raw: any[]): any[] {
 
        for (let i = raw.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = raw[i];
            raw[i] = raw[j];
            raw[j] = temp;
        }
 
        return raw;
    }
}
