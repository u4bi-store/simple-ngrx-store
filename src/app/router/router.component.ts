import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-state';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from '../counter';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

    counter: Observable<number>;

    constructor(private store: Store<AppState>) {
        
        this.counter = store.select('counter');

    }

    ngOnInit() {
    }

    /* 증가 */
    increment(){
        this.store.dispatch({ type: INCREMENT });
    }
    
    /* 감소 */
    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }
    
    /* 초기화 */
    reset(){
        this.store.dispatch({ type: RESET });
    }

}
