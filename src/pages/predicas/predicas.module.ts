import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PredicasPage } from './predicas';

@NgModule({
  declarations: [
    PredicasPage,
  ],
  imports: [
    IonicPageModule.forChild(PredicasPage),
  ],
})
export class PredicasPageModule {}
