import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { concatMap, map, mergeMap, switchMap, toArray } from 'rxjs/operators';
import { range } from 'rxjs/internal/observable/range';
import { of } from 'rxjs/internal/observable/of';
import { NumberActionPair } from './models/numberoperaionpair.model';
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})

export class NumberService {


  constructor(private backend: BackendService) { }
  process(): any {
    
    return this.backend.getNumbers().subscribe(numbers => {
      from(numbers)
        .pipe(
          mergeMap((item: NumberActionPair) => (this.backend.getOperation(item))),
          toArray()
        )
    })
    
  }
}
