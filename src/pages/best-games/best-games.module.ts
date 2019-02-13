import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BestGamesPage } from './best-games';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    BestGamesPage,
  ],
  imports: [
    TranslateModule.forChild(),
    IonicPageModule.forChild(BestGamesPage),
  ],
})
export class BestGamesPageModule {
}
