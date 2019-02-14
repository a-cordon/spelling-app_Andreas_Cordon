import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { SettingsProvider } from "../../providers/settings/settings";
import { SpellwordProvider } from "../../providers/spellword/spellword";
import { Settings } from "../../interfaces/Settings.interface";

/**
 * A class for the settings page
 * @author Andreas Cordon
 * @version 0.1
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  languages: {}[];

  isMusicActive: boolean = null;

  isSoundActive: boolean = null;

  constructor(private translateService: TranslateService,
              public settingsService: SettingsProvider,
              private spellwordService: SpellwordProvider) {

    // Write new languages here to show up on settings-page
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

    settingsService.load().subscribe((settings: Settings) => {
      if (settings !== null) {
        this.isMusicActive = settings.music;
        this.isSoundActive = settings.sound;
      } else {
        this.isMusicActive = true;
        this.isSoundActive = true;
      }
    });
  }

  setLanguage(language: string) {
    this.settingsService.save({language});

    // Ensures that language changing also affects the searched words
    void this.spellwordService.loadSpellwords();
  }

  /**
   * Toggles music and writes it to local storage
   * @param event that has been triggered by user
   */
  toggleMusic(event: boolean) {
    this.isMusicActive = event;
    this.settingsService.save({music: event});
  }

  /**
   * Toggles sound and writes it to local storage
   * @param event that has been triggered by user
   */
  toggleSound(event: boolean) {
    this.isSoundActive = event;
    this.settingsService.save({sound: event});
  }
}
