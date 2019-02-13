import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { BestGame } from "../../interfaces/BestGame.interface";

@Injectable()
export class BestGamesProvider {

  private readonly storageKey: string = 'best-games';

  constructor(private storage: Storage) {
  }

  /**
   * Saves a game to the list of Best Games
   *
   * The time is saved as a number, where the first two indexes are the minutes
   * and the last two indexes are the seconds, i.e.
   * 22 -> 22 Seconds
   * 105 -> 1 Minute 05 Seconds
   * 1253 -> 12 Minutes 53 Seconds
   * @param bestGame
   */
  public async saveToBestGame(bestGame: BestGame): Promise<void> {
    await this.storage.ready();
    const bestGames: BestGame[] = await this.storage.get(this.storageKey) || [];

    /*TODO: limit number of entries (check if new game is a best game)*/
    bestGames.push(bestGame);

    await this.storage.set(this.storageKey, bestGames);
  }

  /**
   * @TODO: write more easy
   * Fetches the list of Best Games from the local storage
   */
  public async getBestGamesInCorrectOrder(): Promise<BestGame[]> {
    await this.storage.ready();
    const bestGames: BestGame[] = await this.storage.get(this.storageKey);
    if (!bestGames) return [];

    await bestGames.sort((gameA, gameB) => {
      if (gameA.points > gameB.points) {
        return -1;
      } else if (gameA.points < gameB.points) {
        return 1;
      } else if (gameA.points === gameB.points) {
        if (gameA.time > gameB.time) {
          return 1;
        } else if (gameA.time < gameB.time) {
          return -1;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    });

    return bestGames;
  }

  /**
   * Deletes the list of saved Best Games
   */
  public async resetBestGames(): Promise<void> {
    await this.storage.ready();
    await this.storage.remove(this.storageKey);
  }
}
