import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WinnerPage } from './winner';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    WinnerPage,
  ],
  imports: [
    TranslateModule.forChild(),
    IonicPageModule.forChild(WinnerPage),
  ],
})
export class WinnerPageModule {
}
