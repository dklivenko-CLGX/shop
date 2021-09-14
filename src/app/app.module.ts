import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FirstModule} from "./components/firstComponent/firstComponent.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
