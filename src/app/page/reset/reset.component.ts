import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { CounterState } from '../../providers/states/counter-state';
import { Reset } from '../../providers/actions/counter.actions';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
    
    constructor(private store: Store<CounterState>) {}

    /* 초기화 */
    reset(){
        this.store.dispatch(new Reset(1));
    }

}
