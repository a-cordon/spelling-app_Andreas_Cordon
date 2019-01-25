import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamePage } from './game';
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    GamePage,
  ],
  imports: [
    PipesModule,
    TranslateModule.forChild(),
    IonicPageModule.forChild(GamePage),
  ],
})
export class GamePageModule {
}
