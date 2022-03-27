import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FatalServerError } from './models/fatalservererror.model';



@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private _snackBar: MatSnackBar) { }

  handleError(error: any): void {
    // console.error('An error occurred:', error.message);
    switch (true) {
      case error instanceof FatalServerError:
        this._snackBar.open("Server Error", "Dismiss");
        break;
    }
    // this._snackBar.open("Server Error", "Dismiss");
    // console.log(error instanceof FatalServerError);
    // console.log(typeof error);
    // console.log(typeof error == typeof HttpErrorResponse);
    // alert(error);
  }
}
