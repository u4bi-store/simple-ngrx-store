import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-state';

import { Store } from '@ngrx/store';
import { INCREMENT } from '../counter';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

    constructor(private store: Store<AppState>) {

    }
    
    ngOnInit() {
    }

    /* 증가 */
    increment(){
    
        this.store.dispatch({
            type: INCREMENT
        });

    }

}
