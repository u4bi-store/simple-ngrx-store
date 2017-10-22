import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrementComponent } from './decrement.component';

describe('DecrementComponent', () => {
  let component: DecrementComponent;
  let fixture: ComponentFixture<DecrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
