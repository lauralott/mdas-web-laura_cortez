import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {pokeType } from '../domain/pokeType'

@Injectable({
  providedIn: 'root'
})
export class PokefinderService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  pokeApiUrl = "http://localhost:8080/types";
  //http://localhost:8080/types?name=pikachu

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  getPokeTypes(pokename: string): Observable<any> {
    console.log(`pokename: ${pokename}`);
    const url = `${this.pokeApiUrl}?name=${pokename}`;
    return this.http.get(url, this.httpOptions).pipe(
      tap(results => 
        console.log(results))
     ,catchError(this.handleError));
  }
}
