import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumbersListComponent } from './numbers-list/numbers-list.component';
import { HttpClientModule } from '@angular/common/http';
import  {GlobalErrorHandlerService} from './global-error-handler.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { MathOperatorPipe } from './math-operator.pipe';
import { MathResultPipe } from './math-result.pipe';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NumbersListComponent,
    MathOperatorPipe,
    MathResultPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,


  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ], bootstrap: [AppComponent]
})
export class AppModule { }
