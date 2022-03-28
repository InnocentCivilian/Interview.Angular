import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FatalServerError } from './models/fatalservererror.model';
import { MissingOperationServerError } from './models/missingoperationservererror.model';



@Injectable({
  providedIn: 'root'
})

export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(public snackBar: MatSnackBar) { }

  handleError(error: any): void {
    switch (true) {
      case error instanceof FatalServerError:
        this.snackBar.open("Server Error", "Dismiss");
        break;
      case error instanceof MissingOperationServerError:
        this.snackBar.open("MISSING DATA", "Dismiss");
        break;
      default:
        this.snackBar.open("Unhandled error", "Dismiss");

    }
  }
}
