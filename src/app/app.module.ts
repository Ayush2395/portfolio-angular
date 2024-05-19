import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"ayush-portfolio-3","appId":"1:1074594437014:web:243c6c830a37fd10cfefb7","databaseURL":"https://ayush-portfolio-3-default-rtdb.firebaseio.com","storageBucket":"ayush-portfolio-3.appspot.com","locationId":"asia-northeast3","apiKey":"AIzaSyB6w56v8PvO0xjge_8lAnTUE9Qqmpi59X4","authDomain":"ayush-portfolio-3.firebaseapp.com","messagingSenderId":"1074594437014","measurementId":"G-N6D1Z7MYME"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
