import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyRouterComponent } from './lazy-router.component';

describe('LazyRouterComponent', () => {
  let component: LazyRouterComponent;
  let fixture: ComponentFixture<LazyRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
