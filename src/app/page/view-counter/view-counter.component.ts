import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CounterState } from '../../providers/states/counter-state';

@Component({
  selector: 'app-view-counter',
  templateUrl: './view-counter.component.html',
  styleUrls: ['./view-counter.component.css']
})
export class ViewCounterComponent{

    counter: Observable<number>;
  
    constructor(private store: Store<CounterState>) {
        
        this.counter = store.select('counter');

    }

}
