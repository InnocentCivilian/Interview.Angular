import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NumberActionPair } from './models/numberoperaionpair.model';
import { catchError, map, tap } from 'rxjs/operators';
import { FatalServerError } from './models/fatalservererror.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {

  }
  getNumbers(): Observable<NumberActionPair[]> {
    return this.http.get<NumberActionPair[]>('./assets/jsons/numbers.json', { responseType: 'json' })
    .pipe(
      catchError(()=>{throw new FatalServerError("error while getting numbers.json")})
    );
  }
}
