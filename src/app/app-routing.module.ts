import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { SettingsComponent } from './user/settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'preferences', component: SettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
