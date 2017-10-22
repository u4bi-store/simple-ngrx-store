import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './providers/reducers/counter.reducers';

import { AppComponent } from './app.component';
import { IncrementComponent } from './page/increment/increment.component';
import { DecrementComponent } from './page/decrement/decrement.component';
import { ResetComponent } from './page/reset/reset.component';
import { ViewCounterComponent } from './page/view-counter/view-counter.component';

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
    StoreModule.forRoot({ counter : counterReducer }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
