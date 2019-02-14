import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage";

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SpellingApp } from './app.component';
import { SettingsProvider } from '../providers/settings/settings';
import { SpellwordProvider } from "../providers/spellword/spellword";
import { BestGamesProvider } from '../providers/best-games/best-games';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    SpellingApp
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(SpellingApp),
    IonicStorageModule.forRoot({
      name: 'SpellingApp',
      storeName: 'spellingapp1'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpellingApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    SpellwordProvider,
    BestGamesProvider
  ]
})
export class AppModule {
}
