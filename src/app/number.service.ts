import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { NumberActionPair } from './models/numberoperaionpair.model';

@Injectable({
  providedIn: 'root'
})

export class NumberService {
  constructor(private backend: BackendService) { }
  calculate(item:NumberActionPair):number{
    switch (item.action) {
      case "add":
        return item.value + item.second;
      case "multiply":
        return item.value * item.second;
        default:
          throw Error
    }
  }
}
