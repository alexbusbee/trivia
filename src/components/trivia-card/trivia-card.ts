import { Component, ViewChild } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
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
 
    constructor(public navCtrl: NavController, public dataService: Data, public events: Events) {
 
        this.slideOptions = {
            onlclickyExternal: true,
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
        let isLastSlide = this.slides.isEnd();
        if(TimerComponent && isLastSlide) {
            this.timerComponent.stopTimer();
        }
    }

    start(){
        this.nextSlide();
        if(TimerComponent) {
            this.timerComponent.startTimer();

            this.events.subscribe('timer:done', () => {
                let lastSlide = this.slides.length();
                this.slides.slideTo(lastSlide, 100);
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
        this.slides.slideTo(1, 100);
    }
}
