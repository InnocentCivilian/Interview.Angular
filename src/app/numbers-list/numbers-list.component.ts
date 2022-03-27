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
    this.numbers.process()
    // console.log("backed")
    // console.log(this.backend.getNumbers())
    // this.backend.getNumbers().subscribe(resp=>{
    //   console.log(resp)
    // })
  }

}
