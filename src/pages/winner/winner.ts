import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { BestGamesProvider } from "../../providers/best-games/best-games";
import { BestGame } from "../../interfaces/BestGame.interface";

/**
 * A class for the winner page
 * @author Andreas Cordon
 * @version 0.1
 */

@IonicPage()
@Component({
  selector: 'page-winner',
  templateUrl: 'winner.html',
})
export class WinnerPage {

  public points: number;

  public minutes: string;

  public seconds: string;

  constructor(navParams: NavParams,
              private viewCtrl: ViewController,
              private bestGamesService: BestGamesProvider) {
    this.points = navParams.get('points') || null;

    // Ensures that the time is always shown with two digits
    this.minutes = navParams.get('timerMinutes') === undefined ? null : ("0" + navParams.get('timerMinutes')).slice(-2);
    this.seconds = navParams.get('timerSeconds') === undefined ? null : ("0" + navParams.get('timerSeconds')).slice(-2);
  }

  /**
   * Closes this overlay and starts a new game if it is set to 'true',
   * also saves the game to the Best Games list
   *
   * The time is saved as a number, where the first two indexes are the minutes
   * and the last two indexes are the seconds, i.e.
   * 22 -> 22 Seconds
   * 105 -> 1 Minute 05 Seconds
   * 1253 -> 12 Minutes 53 Seconds
   * @param newGame to give information if a new game should be started
   */
  public dismissModal(newGame: boolean = false): void {
    const bestGame: BestGame = {
      time: Number.parseFloat(this.minutes + this.seconds),
      points: this.points
    };

    this.bestGamesService.saveToBestGame(bestGame).then(() => {
      void this.viewCtrl.dismiss(newGame);
    });
  }

}
