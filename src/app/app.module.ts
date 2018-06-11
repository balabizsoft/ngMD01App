import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatIconModule} from '@angular/material';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
