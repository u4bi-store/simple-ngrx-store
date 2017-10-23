### app.module.ts
```ts
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './providers/reducers/counter.reducers';

@NgModule({
  ...
  imports: [
    ...
    StoreModule.forRoot({ counter : counterReducer }),
    ...
  ]
  ...
})
export class AppModule { }
```

### counter-state.ts
```ts
export interface CounterState {
    counter: number;
}
```

### counter.actions.ts
```ts
import { Action } from '@ngrx/store';

export const INCREMENT  = '[Counter] INCREMENT';
export const DECREMENT  = '[Counter] DECREMENT';
export const RESET      = '[Counter] RESET';

export class Increment implements Action {
    readonly type = INCREMENT;
}

export class Decrement implements Action {
    readonly type = DECREMENT;
}

export class Reset implements Action {
    readonly type = RESET;
    
    constructor(public payload : number){}

}

export type All = Increment | Decrement | Reset;
```

### counter.reducers.ts
```ts
import * as CounterActions from '../actions/counter.actions';
import { CounterState } from '../states/counter-state';

export function counterReducer(state: number = 0, action: CounterActions.All) {
    switch (action.type) {
        case CounterActions.INCREMENT : return state + 1;
        case CounterActions.DECREMENT : return state - 1;
        case CounterActions.RESET     : return action.payload;
        default : return state;
    }
}
```

### increment.component.ts
```ts
export class IncrementComponent{

    constructor(private store: Store<CounterState>) {}

    increment = () => this.store.dispatch(new Increment());

}
```

### decrement.component.ts
```ts
export class DecrementComponent{
    
    constructor(private store: Store<CounterState>){}

    decrement = () => this.store.dispatch(new Decrement());
}
```

### reset.component.ts
```ts
export class ResetComponent {
    
    constructor(private store: Store<CounterState>) {}

    reset = () => this.store.dispatch(new Reset(0));
    
}
```

### view-counter.component.ts
```ts
export class ViewCounterComponent{

    counter: Observable<number>;
  
    constructor(private store: Store<CounterState>) {
        
        this.counter = store.select('counter');

    }

}
```

### view-counter.component.html
```html
<p> 현재 카운트 : {{ counter | async }}</p>
```

> @ ngrx / store
> - https://github.com/ngrx/platform/blob/master/docs/store/README.md
> - https://github.com/ngrx/platform

> [FEConf Korea 2017]Angular 컴포넌트 대화법 - Jeado Ko
> - https://www.slideshare.net/haibane84/angular-81060380