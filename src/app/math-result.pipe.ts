import { Pipe, PipeTransform } from '@angular/core';
import { NumberActionPair } from './models/numberoperaionpair.model';
import { NumberService } from './number.service';

@Pipe({
  name: 'mathResult'
})
export class MathResultPipe implements PipeTransform {
  constructor(public numbers: NumberService) {
       
  }
  transform(item: NumberActionPair, ...args: unknown[]): number {
   return this.numbers.calculate(item)
  }

}
