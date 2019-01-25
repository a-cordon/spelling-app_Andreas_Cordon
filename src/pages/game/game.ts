import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Timer } from "../../models/timer";

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  private level: number = 1;
  private points: number = 0;
  private letters: string[] = ['a', 'b', 'c', 'd', 'e'];

  private timer: Timer = new Timer();

  constructor() {
  }

  /*TODO: check if methods are ever used/needed*/
  private play(): void {
    this.timer.start();
  }

  private stop(): void {
    this.timer.stop();
  }

  private reset(): void {
    this.timer.reset();
  }
}
