import { Component } from '@angular/core';
import { Events } from "ionic-angular";

@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {
  public timeLeft: number;

  constructor(public events: Events) {}

    ngOnInit() {
      this.events.subscribe('timer:start', () => {
        this.startTimer();
      })
      this.events.subscribe('timer:stop', () => {
        this.stopTimer();
      })
    };

    startTimer(){
      this.timeLeft = 10;
      let timer = setInterval(() => {
        if (this.timeLeft != 0) {
          this.timeLeft -= 1;
        } else {
          clearInterval(timer);
          this.events.publish('timer:done');
        }
      }, 1000);
    }

    stopTimer(){
      this.timeLeft = 0;
    }
}
