import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BackendService } from '../backend.service';

import { NumbersListComponent } from './numbers-list.component';
import { of } from 'rxjs/internal/observable/of';
import { NumberActionPair } from '../models/numberoperaionpair.model';
import { Pipe } from '@angular/core';


function mockPipe(options: Pipe): Pipe {
  const metadata: Pipe = {
    name: options.name
  };

  return <any>Pipe(metadata)(class MockPipe { });
}
describe('NumbersListComponent', () => {
  let component: NumbersListComponent;
  let fixture: ComponentFixture<NumbersListComponent>;

  beforeEach(async () => {
    const backendSpy = jasmine.createSpyObj( ['getNumbers', 'getOperation']);
    backendSpy.getOperation.and.returnValue(of({} as NumberActionPair));
    backendSpy.getNumbers.and.returnValue(of([] as NumberActionPair[]));
   
    await TestBed.configureTestingModule({
      declarations: [
        NumbersListComponent,
        mockPipe({ name: 'mathOperator' }),
        mockPipe({ name: 'mathResult' }),],
      imports: [
        MatSnackBarModule,
        MatListModule,
        MatCardModule,

      ],
      providers: [
        {
          provide: BackendService,
          useValue: backendSpy
        }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(NumbersListComponent);

    component = fixture.componentInstance;
    
    fixture.detectChanges();


    
  });
  it('should create and work without errors', () => {
    expect(component).toBeTruthy();

  });
  it('should read numbers', () => {
    component.ngOnInit()
    expect(component.numbers).toBeDefined();
  });
});