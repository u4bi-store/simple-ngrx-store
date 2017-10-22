import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from "rxjs/Subscription";

import { CounterState } from '../../providers/states/counter-state';
import * as CounterActions from '../../providers/actions/counter.actions';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnDestroy {

    counter: Observable<number>;
    count : number;
    subscription : ISubscription;

    constructor(private store: Store<CounterState>) {
        
        this.counter = store.select('counter');
        this.subscription = this.counter.subscribe(e => this.count = e);

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    /* 증가 */
    increment(){
        this.store.dispatch(new CounterActions.Increment());
    }
    
    /* 감소 */
    decrement(){
        this.store.dispatch(new CounterActions.Decrement());
    }
    
    /* 초기화 */
    reset(){
        this.store.dispatch(new CounterActions.Reset(0));
    }

}
