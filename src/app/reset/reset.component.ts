import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-state';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../counter';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
    
    constructor(private store: Store<AppState>) {
    
    }

    ngOnInit() {
    }

    
    /* 초기화 */
    reset(){
        
        this.store.dispatch({
            type: RESET
        });
    
    }

}
