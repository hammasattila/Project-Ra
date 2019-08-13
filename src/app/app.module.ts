import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { DesignModule } from './design/design.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';

@NgModule({
   declarations: [
      AppComponent,
      MainMenuComponent
   ],
   imports: [
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule, // Only required for database features
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      DesignModule,
      HomeModule,
      UserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
