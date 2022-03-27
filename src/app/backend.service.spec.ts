import { TestBed } from '@angular/core/testing';

import { BackendService } from './backend.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NumberActionPair } from './models/numberoperaionpair.model';

describe('BackendService', () => {
  let service: BackendService;
  let first: number = 2;
  let second: number = 3;
  let add : NumberActionPair = {value:first,second:second,action:"add"} as NumberActionPair
  let multiply : NumberActionPair = {value:first,second:second,action:"multiply"} as NumberActionPair
  let invalid : NumberActionPair = {value:first,second:second,action:"lorem"} as NumberActionPair

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BackendService]
    });
    service = TestBed.inject(BackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch numbers correctly', () => {
    service.getNumbers().subscribe(data =>
      expect(data.length).toBeGreaterThan(0)
    );
  });
  it('should fetch add correctly', (done: DoneFn) => {
    service.getOperation(add).subscribe({
      next: numbers => expect(numbers.action).toBe("add"),
      error: error  => {
        expect(error.message).toContain('404');
        done();
      }
    });
  });
  it('should fetch multiply correctly', () => {
    service.getOperation(multiply).subscribe(data =>
      expect(data.action).toBe("multiply")
    );
  });
  it('should throw error on invalid action', () => {
    service.getOperation(invalid).subscribe(data =>
      expect(data.action).toBe("multiply")
    );
  });
});
