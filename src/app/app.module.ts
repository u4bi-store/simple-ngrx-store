import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';

import { AppComponent } from './app.component';
import { IncrementComponent } from './increment/increment.component';
import { DecrementComponent } from './decrement/decrement.component';
import { ResetComponent } from './reset/reset.component';
import { ViewCounterComponent } from './view-counter/view-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    IncrementComponent,
    DecrementComponent,
    ResetComponent,
    ViewCounterComponent
  ],
  imports: [
    BrowserModule,  
    StoreModule.forRoot({ counter: counterReducer }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
