# AngularInterview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running code coverage analysis

Run `ng test --no-watch --code-coverage` to export a code coverage report (both brief and full analysis in html format)

latest code coverate summary is as follows:
```
=============================== Coverage summary ===============================
Statements   : 94.54% ( 52/55 )
Branches     : 100% ( 9/9 )
Functions    : 84.21% ( 16/19 )
Lines        : 93.75% ( 45/48 )
================================================================================
```

## Files

### models/* 
Models used in this sample application
### number list
A component which used to display program results
### Backend Service
A service which provides the capability to load json files
## Number Service
A service with single function which calculate result of two opreands and a single operator ( called action in this context)
## Global Error Handler
handles any thrown errors and display material snackbar based on them
## Math Operator Pipe
converts add to + and multiply to *
## Math Result Pipe
Calls Number Service ( used for readability  in html template)