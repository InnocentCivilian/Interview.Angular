import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FatalServerError } from './models/fatalservererror.model';
import { MissingOperationServerError } from './models/missingoperationservererror.model';



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
      case error instanceof MissingOperationServerError:
        this._snackBar.open("MISSING DATA", "Dismiss");
        break;
      default:
        console.error(error)
        this._snackBar.open("Unhandled error", "Dismiss");

    }
  }
}
