import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { CounterState } from '../../providers/states/counter-state';
import { Increment } from '../../providers/actions/counter.actions';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent{

    constructor(private store: Store<CounterState>) {}

    /* 증가 */
    increment(){
        this.store.dispatch(new Increment());
    }

}
