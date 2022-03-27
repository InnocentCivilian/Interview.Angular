import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-numbers-list',
  templateUrl: './numbers-list.component.html',
  styleUrls: ['./numbers-list.component.css']
})
export class NumbersListComponent implements OnInit {

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    console.log("backed")
    console.log(this.backend.getNumbers())
    this.backend.getNumbers().subscribe(resp=>{
      console.log(resp)
    })
  }

}
