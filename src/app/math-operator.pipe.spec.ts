import { MathOperatorPipe } from './math-operator.pipe';

describe('MathOperatorPipe', () => {
  let pipe : MathOperatorPipe;
  beforeEach(() => {
    pipe = new MathOperatorPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should transform add to +', () => {
    expect(pipe.transform("add")).toBe("+");
  });
  it('should transform multiply to *', () => {
    expect(pipe.transform("multiply")).toBe("*");
  });
  it('should be throw error if action is netiher add or multiply', () => {
    expect( function(){ pipe.transform(""); } ).toThrow(new Error());
  });
});
