import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { CounterState } from '../../providers/states/counter-state';
import { Decrement } from '../../providers/actions/counter.actions';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css']
})
export class DecrementComponent{

    constructor(private store: Store<CounterState>){}

    /* 감소 */
    decrement(){
        this.store.dispatch(new Decrement());
    }
}
