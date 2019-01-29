import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { SettingsProvider } from "../providers/settings/settings";
import { Settings } from "../interfaces/Settings.interface";
import { SpellwordProvider } from "../providers/spellword/spellword";

@Component({
  templateUrl: 'app.html'
})
export class SpellingApp {
  rootPage: any = 'StartPage';

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              translateService: TranslateService,
              settingsService: SettingsProvider,
              spellwordService: SpellwordProvider) {

    // This language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('de');

    // Load settings and set language
    settingsService.load().subscribe((settings: Settings) => translateService.use(settings.language));

    platform.ready().then(() => {

      // Ensures that spellwords are already loaded when starting the game
      spellwordService.loadSpellwords();

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

