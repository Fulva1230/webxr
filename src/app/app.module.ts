import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BallDirective } from './xr/ball.directive';
import { BuscardDirective } from './xr/buscard.directive';
import { PoorArDirective } from './xr/poor-ar.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BallDirective,
    BuscardDirective,
    PoorArDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
