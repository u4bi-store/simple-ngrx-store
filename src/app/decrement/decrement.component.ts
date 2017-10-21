import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-state';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../counter';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css']
})
export class DecrementComponent implements OnInit {

    constructor(private store: Store<AppState>) {
  
    }

    ngOnInit() {
    }

    /* 감소 */
    decrement(){

        this.store.dispatch({
            type: DECREMENT
        });

    }
}
