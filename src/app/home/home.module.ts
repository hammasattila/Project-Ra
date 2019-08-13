import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DesignModule } from '../design/design.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuickLogComponent } from './quick-log/quick-log.component';



@NgModule({
  declarations: [ HomeViewComponent, DashboardComponent, QuickLogComponent ],
  imports: [ CommonModule, DesignModule, FormsModule, ReactiveFormsModule ],
  exports: [ HomeViewComponent ]
})
export class HomeModule { }
