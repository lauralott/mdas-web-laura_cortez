import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  
  handle(error: HttpErrorResponse) {
    if (error.status==200){
      return throwError("Pokemon added!");
    }
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      if (error.error.message!= undefined && error.error.message!= null){
        return throwError(`Error: ${error.error.message}`);
      }else{
        return throwError(`Unexpected event: Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      }
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
