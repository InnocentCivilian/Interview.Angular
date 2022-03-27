import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { concatMap, mergeMap, switchMap, toArray } from 'rxjs/operators';
import { range } from 'rxjs/internal/observable/range';
import { of } from 'rxjs/internal/observable/of';
import { NumberActionPair } from './models/numberoperaionpair.model';

@Injectable({
  providedIn: 'root'
})

export class NumberService {


  constructor(private backend: BackendService) { }
  process() {
    this.backend.getNumbers()
      .pipe(
        mergeMap((items:NumberActionPair)=>of(this.backend.getOperation(items.action))
      )
  }
}
