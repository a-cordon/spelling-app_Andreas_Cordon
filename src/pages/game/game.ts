import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Timer } from "../../models/timer";

export interface Letter {
  letter: string,
  disabled: boolean
}

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
  private letterIndex: number;

  private letters: Letter[];

  private timer: Timer = new Timer();

  constructor() {
    this.spellWord = 'Ameisenbär';

    this.letterIndex = 0;

    this.timerPlay();
    this.getLettersArray();
  }

  /**
   * Returns the needed letter
   */
  private getSearchedLetter(): Letter {
    return {
      letter: this.spellWord.charAt(this.letterIndex).toUpperCase(),
      disabled: false
    }
  }

  /*TODO: check if methods are ever used/needed*/
  /**
   * Starts the timer
   */
  private timerPlay(): void {
    this.timer.start();
  }

  /**
   * Stops the timer
   */
  private timerStop(): void {
    this.timer.stop();
  }

  /**
   * Resets the timer
   */
  private timerReset(): void {
    this.timer.reset();
  }

  /*TODO: error handling*/
  /**
   * Creates a shuffled array of the needed letter and 4 random letters
   */
  private getLettersArray(): void {
    this.letters = [];

    this.letters.push(this.getSearchedLetter());

    do {
      const randomLetter: string = this.possibleLetters[Math.floor(Math.random() * this.possibleLetters.length)].toUpperCase();
      const letterExists: boolean = !!this.letters.find((letter: Letter) => {
        return randomLetter === letter.letter;
      });

      if (letterExists || randomLetter === this.getSearchedLetter().letter)
        continue;

      this.letters.push({letter: randomLetter, disabled: false});
    } while (this.letters.length < 5);

    this.shuffleLetterArray(this.letters);
  }

  /**
   * Shuffles array in place, so the searched letter is not always in first place
   * @param letters
   */
  private shuffleLetterArray(letters: Letter[]): Letter[] {
    let j, x, i;

    for (i = letters.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = letters[i];
      letters[i] = letters[j];
      letters[j] = x;
    }
    return letters;
  }

  /*TODO: check if all parameters are needed here*/
  private onLetterClicked(event, index, letter) {
    if (this.getSearchedLetter().letter === letter.letter) {
      ++this.points;
      ++this.letterIndex;
      this.getLettersArray();
    } else {
      letter.disabled = true;
      --this.points;
    }
  }
}
