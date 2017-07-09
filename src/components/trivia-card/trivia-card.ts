import { Component, ViewChild } from '@angular/core';
import { Storage } from "@ionic/storage";
import { NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { TimerComponent } from "../timer/timer";
import { Data } from '../../providers/data';

@Component({
  selector: 'trivia-card',
  templateUrl: 'trivia-card.html'
})
export class TriviaCardComponent {
    homePage = HomePage;

    @ViewChild('slides') slides: any;
    @ViewChild('scoreCounter') scoreCounter: any;
    @ViewChild(TimerComponent) timerComponent: TimerComponent;
 
    title: string;
    description: string;
    path: string;
    key: string;

    hasAnswered: boolean = false;
    score: number = 0;
    highScore: number;
 
    questions: any;
    slideCount: number;
 
    constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data, public events: Events, private storage: Storage, private alertCtrl: AlertController) {}

    // ionViewWillEnter to work with slides instead of pages?
    ngOnInit() {
        this.slides.lockSwipes(true);

        this.loadTrivia()
    }

    // Load and shuffle trivia questions and answers
    loadTrivia() {
        this.title = this.navParams.get('title');
        this.description = this.navParams.get('description');

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

        // Get high score from local storage
        let key = this.title + 'highScore';
        this.storage.get(key).then((val) => {
            if (val === null) {
                this.highScore = 0;
            } else {
                this.highScore = val;
            }
        });

    }


    nextSlide(){
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
        
        let isLastSlide = this.slides.isEnd();
            if(TimerComponent && isLastSlide) {
                
                // Stop timer when at score slide
                this.events.publish('timer:stop');

                // Check if new high score and update
                this.updateHighScore();
            }
    }

    start(){
        this.slides.lockSwipes(false);
        this.nextSlide();
        this.slides.lockSwipes(true);

        this.events.publish('timer:start');

        // If time runs out, stop timer and slide to score slide
        this.events.subscribe('timer:done', () => {
            let lastSlide = this.slides.length();
            this.slides.lockSwipes(false);
            this.slides.slideTo(lastSlide, 100);
            this.events.unsubscribe('timer:done');

            // Check if new high score and update
            this.updateHighScore();
        })
    }

    practice() {
        // Don't keep score
        this.scoreCounter = null;
        this.score = null;

        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    }
 
    selectAnswer(answer, question){
        this.hasAnswered = true;
        answer.selected = true;

        if (answer.correct) {
            // Check if keeping score
            if (this.scoreCounter) {
                this.score++;
            }

            this.nextSlide();
            this.hasAnswered = false;
            answer.selected = false;
        } else {
            setTimeout(() => {
                this.nextSlide();
                this.hasAnswered = false;
                answer.selected = false;
            }, 2000);
        }
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

    updateHighScore() {
        if (this.score > this.highScore) {
            let alert = this.alertCtrl.create({
                title: 'New High Score!',
                buttons: ['Ok']
            });
            alert.present();

            this.highScore = this.score;

            this.title = this.navParams.get('title');
            let key = this.title + 'highScore';
            this.storage.set(key, this.score);
        } 
    }

    restartGame() {
        this.loadTrivia()

        this.slides.lockSwipes(false);
        this.slides.slideTo(0, 100);
        this.slides.lockSwipes(true);

        this.score = 0;
    }

    quit() {
        this.dataService.data = false;
        this.navCtrl.push(HomePage);
    }
}
