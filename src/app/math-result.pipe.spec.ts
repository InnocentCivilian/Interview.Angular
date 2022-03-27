import { HttpClient } from '@angular/common/http';
import { BackendService } from './backend.service';
import { MathResultPipe } from './math-result.pipe';
import { NumberService } from './number.service';

describe('MathResultPipe', () => {
  it('create an instance', () => {
    const pipe = new MathResultPipe(new NumberService());
    expect(pipe).toBeTruthy();
  });
});
