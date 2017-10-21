import { Component, OnInit } from '@angular/core';

import { AppState } from '../app-state';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-counter',
  templateUrl: './view-counter.component.html',
  styleUrls: ['./view-counter.component.css']
})
export class ViewCounterComponent implements OnInit {

    counter: Observable<number>;
  
    constructor(private store: Store<AppState>) {
        
        this.counter = store.select('counter');

    }

    ngOnInit() {
    }

}
