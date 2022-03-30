import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CliComponent } from './cli/cli.component';
import { ComponentCliComponent } from './component-cli/component-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    ComponentCliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
