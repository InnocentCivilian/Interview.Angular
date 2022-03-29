import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathOperator'
})
export class MathOperatorPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    switch (value) {
      case "add":
        return "+";
      case "multiply":
        return "*"
        default:
          throw new Error();
    }
  }

}
