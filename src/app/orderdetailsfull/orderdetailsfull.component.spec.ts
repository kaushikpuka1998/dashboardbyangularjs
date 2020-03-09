import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetailsfullComponent } from './orderdetailsfull.component';

describe('OrderdetailsfullComponent', () => {
  let component: OrderdetailsfullComponent;
  let fixture: ComponentFixture<OrderdetailsfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdetailsfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdetailsfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
