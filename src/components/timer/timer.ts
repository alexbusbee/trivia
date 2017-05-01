import { Component } from '@angular/core';
import { Events } from "ionic-angular";

@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {
  public timeLeft: number = 5;

  constructor(public events: Events) {}

    startTimer(){
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
