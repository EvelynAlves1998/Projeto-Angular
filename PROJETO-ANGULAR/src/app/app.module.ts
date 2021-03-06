import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentCliComponent } from './component-cli/component-cli.component';
import { ComponentManualComponent } from './component-manual/component-manual.component';
import { blurComponent } from './component-blur/blur.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentCliComponent,
    ComponentManualComponent,
    blurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
