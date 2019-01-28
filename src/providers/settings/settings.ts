import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs/Observable";
import { of as observableOf } from 'rxjs/observable/of'
import { Observer } from "rxjs/Observer";
import { Settings } from "../../interfaces/Settings.interface";

@Injectable()
export class SettingsProvider {

  settings: Settings = null;
  private observer: Observer<Settings> = null;

  constructor(private storage: Storage) {
  }

  /**
   * Load and observe settings
   * @returns {Observable<Settings>}
   */
  load(): Observable<Settings> {
    if (this.observer !== null &&
      this.settings !== null) return observableOf(this.settings);

    return new Observable<Settings>((observer: Observer<any>) => {
      this.observer = observer;

      this.storage.get('settings').then((settings: Settings) => {
        this.settings = settings || {
          language: 'de',
          music: true,
          sound: true
        };

        observer.next(this.settings);
      });
    });
  }

  /**
   * Writes a settings object in the local storage
   * @param {Settings} settings
   */
  save(settings: Settings): void {
    if (this.settings === null) return;

    // Update and write to storage
    void this.storage.set('settings', Object.assign(this.settings, settings));

    // Notify subscribers
    this.observer.next(this.settings);
  }
}
