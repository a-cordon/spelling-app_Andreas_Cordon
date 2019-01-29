import { Component } from '@angular/core';
import { AlertController, IonicPage, Modal, ModalController, NavController } from 'ionic-angular';

import { Letter } from "../../interfaces/Letter.interface";
import { SpellWord } from "../../interfaces/SpellWord.interface";

import { Timer } from "../../models/timer";
import { TranslateService } from "@ngx-translate/core";
import { SpellwordProvider } from "../../providers/spellword/spellword";

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  public level: number = 1;

  public points: number = 0;

  /*TODO: initialise possibleLettersArray in constructor and add 'ä', 'ö' and 'ü' only if used language is 'de', OR get fitting letters from externally*/
  private readonly possibleLetters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö', 'ü'];

  /*TODO: load word from external file*/
  public spellWords: SpellWord[];

  public spellWordIndex: number;

  public indicateSpellword: string = '';

  private letterIndex: number;

  public letters: Letter[];

  public timer: Timer = new Timer();

  constructor(private modalCtrl: ModalController,
              private navCtrl: NavController,
              private alertCtrl: AlertController,
              private translateService: TranslateService,
              private spellwordService: SpellwordProvider) {
    this.spellWordIndex = 0;
    this.letterIndex = 0;

    this.spellWords = this.shuffleArray(this.getSearchedWords());
    this.timerPlay();
    this.getLettersArray();
  }

  /**
   * Loads the array of searched words with the related image
   */
  private getSearchedWords(): SpellWord[] {
    return this.spellwordService.spellwords;
  }

  /**
   * Returns the needed letter
   */
  private getSearchedLetter(): Letter {
    return {
      letter: this.spellWords[this.spellWordIndex].spellword.charAt(this.letterIndex).toUpperCase(),
      disabled: false
    }
  }

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

  /**
   * Resets the points counter
   */
  private resetPoints(): void {
    this.points = 0;
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

    this.shuffleArray(this.letters);
  }

  /**
   * @TODO: keep position of letter if it is a double-letter
   * Shuffles an array in place
   * @param array
   */
  private shuffleArray(array) {
    let j, x, i;

    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  }

  /**
   * Takes a letter, compares it to the searched letter and initiates further action
   * @param letter
   */
  public onLetterClicked(letter): void {
    if (this.getSearchedLetter().letter === letter.letter) {
      ++this.points;
      this.indicateSpellword += letter.letter;

      if (this.letterIndex !== this.spellWords[this.spellWordIndex].spellword.length - 1) {
        ++this.letterIndex;
      } else {
        if (this.spellWordIndex !== this.spellWords.length - 1) {
          this.indicateSpellword = '';
          ++this.spellWordIndex;
          ++this.level;
          this.letterIndex = 0;
        } else {
          this.timerStop();
          const winnerModal: Modal = this.modalCtrl.create('WinnerPage', {
            points: this.points,
            timerMinutes: this.timer.minutes,
            timerSeconds: this.timer.seconds
          });
          winnerModal.onWillDismiss((newGame: boolean) => {
            this.timerReset();
            this.resetPoints();

            newGame === true ? this.navCtrl.setRoot('GamePage') : this.navCtrl.setRoot('StartPage');
          });
          void winnerModal.present();
        }
      }
      this.getLettersArray();
    } else {
      letter.disabled = true;
      --this.points;
    }
  }

  /**
   * Shows an alert that lets pause or resume the game
   */
  public pauseGame(): void {
    this.translateService.get('GamePage').toPromise().then(labels => {
      this.timerStop();
      const title: string = labels['GAME_PAUSED'];

      void this.alertCtrl.create({
        title: title.toUpperCase(),
        buttons: [
          {
            text: labels['END_GAME'],
            cssClass: 'spellApp-pauseAlertButton--red',
            role: 'cancel',
            handler: () => {
              this.timerReset();
              void this.navCtrl.setRoot('StartPage');
            }
          },
          {
            text: labels['RESUME'],
            handler: () => {
              this.timerPlay();
            }
          }
        ],
        enableBackdropDismiss: false
      }).present();
    });
  }
}
