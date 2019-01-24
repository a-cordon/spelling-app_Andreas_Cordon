import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { SettingsProvider } from "../../providers/settings/settings";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  languages: {}[];

  isMusicActive: boolean;

  isSoundActive: boolean;

  constructor(private translateService: TranslateService,
              public settingsService: SettingsProvider) {

    this.translateService.stream('Languages').subscribe(
      labels => {
        this.languages = [
          {
            name: labels['DE'],
            code: 'de'
          },
          {
            name: labels['EN'],
            code: 'en'
          }
        ];
      }
    );

    this.isMusicActive = true;
    this.isSoundActive = true;
  }

  setLanguage(language: string) {
    this.settingsService.save({language});
  }

  /**
   * @TODO: storage does not work
   * Toggles music and writes it to local storage
   * @param event
   */
  toggleMusic(event: boolean) {
    this.isMusicActive = event;
    // this.settingsService.save({music: event});
  }

  /**
   * @TODO: storage does not work
   * Toggles sound and writes it to local storage
   * @param event
   */
  toggleSound(event: boolean) {
    this.isSoundActive = event;
    // this.settingsService.save({sound: event});
  }
}
