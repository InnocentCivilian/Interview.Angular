import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-numbers-list',
  templateUrl: './numbers-list.component.html',
  styleUrls: ['./numbers-list.component.css']
})
export class NumbersListComponent implements OnInit {

  constructor(private numbers: NumberService) { }

  ngOnInit(): void {
    // console.log(this.numbers.process())
    // console.log(this.numbers.process())
    // console.log(this.numbers.process())
    // console.log(this.backend.getNumbers())

    this.numbers.process().subscribe(console.log)
  }

}
