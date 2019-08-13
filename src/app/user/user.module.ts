import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { DesignModule } from '../design/design.module';



@NgModule({
  declarations: [ SettingsComponent ],
  imports: [ CommonModule, DesignModule ],
  exports: [ SettingsComponent ]
})
export class UserModule { }
