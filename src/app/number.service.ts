import { Injectable } from '@angular/core';
import { NumberActionPair } from './models/numberoperaionpair.model';

@Injectable({
  providedIn: 'root'
})

export class NumberService {
  calculate(item:NumberActionPair):number{
    switch (item.action) {
      case "add":
        return item.value + item.second;
      case "multiply":
        return item.value * item.second;
        default:
          throw new Error("invalid action")
    }
  }
}
