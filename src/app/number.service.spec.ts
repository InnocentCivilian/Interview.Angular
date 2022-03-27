import { TestBed } from '@angular/core/testing';
import { NumberActionPair } from './models/numberoperaionpair.model';

import { NumberService } from './number.service';

describe('NumberService', () => {
  let service: NumberService;
  let first: number = 2;
  let second: number = 3;
  let add : NumberActionPair = {value:first,second:second,action:"add"} as NumberActionPair
  let multiply : NumberActionPair = {value:first,second:second,action:"multiply"} as NumberActionPair
  let invalid : NumberActionPair = {value:first,second:second,action:"lorem"} as NumberActionPair

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be return sum of two numbers if action is add', () => {
    expect(service.calculate(add)).toBe(first + second);
  });
  it('should be return multiplication of two numbers if action is multiply', () => {
    expect(service.calculate(multiply)).toBe(first * second);
  });
  
  it('should be throw error if action is netiher add or multiply', () => {
    expect( function(){ service.calculate(invalid); } ).toThrow(new Error("invalid action"));
  });
});
