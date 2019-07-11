import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuickLogComponent } from './quick-log/quick-log.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
   declarations: [
      AppComponent,
      MainMenuComponent,
      QuickLogComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatSelectModule,
      MatStepperModule,
      MatFormFieldModule,
      BrowserAnimationsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
