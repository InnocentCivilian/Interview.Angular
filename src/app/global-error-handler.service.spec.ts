import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs/internal/observable/of';

import { GlobalErrorHandlerService } from './global-error-handler.service';
import { FatalServerError } from './models/fatalservererror.model';
import { MissingOperationServerError } from './models/missingoperationservererror.model';
class MatSnackBarStub{
  open(){
    return {
      onAction: () => of({})
    }
  }

}
describe('GlobalErrorHandlerService', () => {
  let service: GlobalErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [GlobalErrorHandlerService, { provide: MatSnackBar , useClass: MatSnackBarStub }]
    });
    service = TestBed.inject(GlobalErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('unknown error thrown snack bar should be called', () => {
    spyOn(service._snackBar,"open").and.callThrough();
    service.handleError(new Error());
    expect(service._snackBar.open).toHaveBeenCalled();
  });
  it('FatalServerError thrown snack bar should be called', () => {
    spyOn(service._snackBar,"open").and.callThrough();
    service.handleError(new FatalServerError());
    expect(service._snackBar.open).toHaveBeenCalled();
  });
  it('MissingOperationServerError thrown snack bar should be called', () => {
    spyOn(service._snackBar,"open").and.callThrough();
    service.handleError(new MissingOperationServerError());
    expect(service._snackBar.open).toHaveBeenCalled();
  });
});
