import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { MathResultPipe } from './math-result.pipe';
import { NumberActionPair } from './models/numberoperaionpair.model';
import { NumberService } from './number.service';
class NumberServiceStub{
  calculate(){
    return {
      onAction: () => of({})
    }
  }

}
describe('MathResultPipe', () => {
  let pipe : MathResultPipe;
  let first: number = 2;
  let second: number = 3;
  let add : NumberActionPair = {value:first,second:second,action:"add"} as NumberActionPair
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [MathResultPipe, { provide: NumberService , useClass: NumberServiceStub }]
    });
    pipe = TestBed.inject(MathResultPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should call number service', () => {
    spyOn(pipe.numbers,"calculate").and.callThrough();
    pipe.transform(add)
    expect(pipe.numbers.calculate).toHaveBeenCalled();
  });
});
