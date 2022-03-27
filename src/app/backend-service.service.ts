import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NumberActionPair } from './models/numberoperaionpair.model';

@Injectable({
  providedIn: 'root'
})

export class BackendServiceService {
  constructor(private http: HttpClient) { 

  }
  getNumbers(){
    this.http.get<NumberActionPair[]>('./assets/jsons/numbers.json', {responseType: 'json'});
  }
}
