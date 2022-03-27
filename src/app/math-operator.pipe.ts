import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathOperator'
})
export class MathOperatorPipe implements PipeTransform {

  transform(value: string|undefined, ...args: unknown[]): string {
    switch (value) {
      case "add":
        return "+";
      case "multiply":
        return "*"
        default:
          throw Error
    }
  }

}
