import { TestBed } from '@angular/core/testing';

import { BackendService } from './backend.service';
import { NumberActionPair } from './models/numberoperaionpair.model';
import { HttpClient } from '@angular/common/http';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';

describe('BackendService', () => {
  let service: BackendService;
  // let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpSpy: Spy<HttpClient>;

  let first: number = 2;
  let second: number = 3;
  let add: NumberActionPair = { value: first, second: second, action: "add" } as NumberActionPair
  let multiply: NumberActionPair = { value: first, second: second, action: "multiply" } as NumberActionPair

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BackendService,
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ]
    });

    service = TestBed.inject(BackendService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch numbers correctly', (done: DoneFn) => {
    httpSpy.get.and.nextWith([ {"value": 1, "action": "add"}, {"value": 2, "action": "multiply"}, {"value": 3, "action": "add"}, {"value": 4, "action": "add"}, {"value": 5, "action": "multiply"}, {"value": 6, "action": "multiply"} ]     );

    service.getNumbers().subscribe({
      next: numbers => {
        expect(numbers.length).toBeGreaterThan(0)
        done();
      },
      error: error => {
        done.fail
      }
    });
  });
  it('should fetch add correctly', (done: DoneFn) => {
    httpSpy.get.and.nextWith({ "value": 10 });

    service.getOperation(add).subscribe({
      next: numbers => {
        expect(numbers.action).toBe("add")
        done();
      },
      error: error => {
        done.fail
      }
    });
  });
  it('should fetch multiply correctly', (done: DoneFn) => {
    httpSpy.get.and.nextWith({ "value": 10 });

    service.getOperation(multiply).subscribe({
      next: numbers => {
        expect(numbers.action).toBe("multiply")
        done();
      },
      error: error => {
        done.fail
      }
    });
  });
});
