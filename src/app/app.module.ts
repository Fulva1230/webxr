import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BallDirective } from './ball.directive';
import { BuscardDirective } from './xr/buscard.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BallDirective,
    BuscardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
