import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { toArray } from 'rxjs/internal/operators/toArray';
import { mergeMap } from 'rxjs/operators';
import { BackendService } from '../backend.service';
import { NumberActionPair } from '../models/numberoperaionpair.model';

@Component({
  selector: 'app-numbers-list',
  templateUrl: './numbers-list.component.html',
  styleUrls: ['./numbers-list.component.css']
})
export class NumbersListComponent implements OnInit {

  numbers: NumberActionPair[] = [];
  constructor(private backend:BackendService) { }

  ngOnInit(): void {
    this.backend.getNumbers().subscribe(numbers => {
      from(numbers)
        .pipe(
          mergeMap((item: NumberActionPair) => (this.backend.getOperation(item))),
          toArray(),
        ).subscribe(result=>this.numbers.push(...result))
    })
  }

}
