import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartPage } from './start';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    StartPage,
  ],
  imports: [
    TranslateModule.forChild(),
    IonicPageModule.forChild(StartPage),
  ],
})
export class StartPageModule {
}
