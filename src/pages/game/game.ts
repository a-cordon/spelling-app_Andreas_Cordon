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

  /*TODO: load word from external file*/
  private spellWord: string;

  private letters: string[];

  private timer: Timer = new Timer();

  constructor() {
    this.timerPlay();
    this.getLettersArray();
  }

  /*TODO: check if methods are ever used/needed*/
  private timerPlay(): void {
    this.timer.start();
  }

  private timerStop(): void {
    this.timer.stop();
  }

  private timerReset(): void {
    this.timer.reset();
  }

  /*TODO: error handling*/
  private getLettersArray(): void {
    this.spellWord = 'Ameisenbär';
    this.letters = [];
    const letterIndex = 0;

    const searchedLetter: string = this.spellWord.charAt(letterIndex).toUpperCase();
    this.letters.push(searchedLetter);

    do {
      const randomLetter: string = this.possibleLetters[Math.floor(Math.random() * this.possibleLetters.length)].toUpperCase();
      const letterExists: boolean = !!this.letters.find((letter: string) => {
        return randomLetter === letter;
      });

      if (letterExists || randomLetter === searchedLetter)
        continue;

      this.letters.push(randomLetter);
    } while (this.letters.length < 5);

    this.shuffleLetterArray(this.letters);
  }

  /**
   * Shuffles array in place, so the searched letter is not always in first place
   * @param letters
   */
  private shuffleLetterArray(letters: string[]): string[] {
    let j, x, i;

    for (i = letters.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = letters[i];
      letters[i] = letters[j];
      letters[j] = x;
    }
    return letters;
  }
}
