import { Component } from '@angular/core';
import { AlertController, IonicPage } from 'ionic-angular';
import { BestGamesProvider } from "../../providers/best-games/best-games";
import { BestGame } from "../../interfaces/BestGame.interface";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-best-games',
  templateUrl: 'best-games.html',
})
export class BestGamesPage {

  public bestGames: BestGame[] = [];

  constructor(private bestGamesService: BestGamesProvider,
              private translateService: TranslateService,
              private alertCtrl: AlertController) {
    this.bestGamesService.getBestGamesInCorrectOrder().then((bestGames: BestGame[]) => {
      this.bestGames = bestGames;
    });
  }

  /**
   * Resets the list of saved Best Games
   */
  public resetBestGames(): void {
    this.translateService.get('BestGamesPage').toPromise().then(labels => {
      const title: string = labels['CONFIRM_DELETE'];

      void this.alertCtrl.create({
        title: title.toUpperCase(),
        buttons: [
          {
            text: labels['DELETE_BEST_GAMES'],
            cssClass: 'spellApp-pauseAlertButton--red',
            role: 'cancel',
            handler: () => {
              // Resets games in storage
              void this.bestGamesService.resetBestGames();

              // Resets games in template
              this.bestGames = [];
            }
          },
          {
            text: labels['ABORT_DELETE'],
          }
        ],
        enableBackdropDismiss: false
      }).present();
    });
  }
}
