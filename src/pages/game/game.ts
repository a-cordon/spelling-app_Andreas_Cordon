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
  /*TODO: initialise possibleLettersArray in constructor and add 'ä', 'ö' and 'ü' only if used language is 'de', OR get fitting letters from externally*/
  private readonly possibleLetters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö', 'ü'];

  private letters: string[];

  private timer: Timer = new Timer();

  constructor() {
    this.play();
    this.getLettersArray();
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

  /*TODO: error handling*/
  /*TODO: add correct letter*/
  private getLettersArray(): void {
    this.letters = [];

    do {
      const randomLetter: string = this.possibleLetters[Math.floor(Math.random() * this.possibleLetters.length)];
      const letterExists: boolean = !!this.letters.find((letter: string) => {
        return randomLetter === letter;
      });

      if (letterExists)
        continue;

      this.letters.push(randomLetter);
    } while (this.letters.length < 5);
  }
}
