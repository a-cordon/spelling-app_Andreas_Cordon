import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

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
              private viewCtrl: ViewController) {
    this.points = navParams.get('points') || null;

    // Ensures that the time is always shown with two digits
    this.minutes = navParams.get('timerMinutes') === undefined ? null : ("0" + navParams.get('timerMinutes')).slice(-2);
    this.seconds = navParams.get('timerSeconds') === undefined ? null : ("0" + navParams.get('timerSeconds')).slice(-2);
  }

  /**
   * Closes this overlay and starts a new game if it is set to 'true'
   * @param newGame
   */
  public dismissModal(newGame: boolean = false): void {
    void this.viewCtrl.dismiss(newGame);
  }

}
