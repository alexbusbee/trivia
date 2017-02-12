import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent implements OnInit {
  text: string;
  score: number;

  constructor() {
    console.log('Hello Timer Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
  }

  tick() {
    let seconds = 60;
    let counter = document.getElementById("counter");
    seconds--;
    counter.innerHTML = String(seconds);
    if( seconds > 0 ) {
        setTimeout(this.tick, 1000);
    }
  }
}
