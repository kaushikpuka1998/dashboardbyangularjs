import { TestBed } from '@angular/core/testing';

import { OrderlistService } from './orderlist.service';

describe('OrderlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderlistService = TestBed.get(OrderlistService);
    expect(service).toBeTruthy();
  });
});
