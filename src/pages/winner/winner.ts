import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-winner',
  templateUrl: 'winner.html',
})
export class WinnerPage {

  private points: number;
  private minutes: string;
  private seconds: string;

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController) {
    this.points = navParams.get('points');
    this.minutes = ("0" + navParams.get('timerMinutes')).slice(-2);
    this.seconds = ("0" + navParams.get('timerSeconds')).slice(-2);
  }

  dismissModal() {
    void this.viewCtrl.dismiss();
  }

}
