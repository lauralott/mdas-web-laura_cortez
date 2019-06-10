import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EnvironmentService } from './environment.service';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PokefinderService {

  constructor(private http: HttpClient, private env:EnvironmentService, 
    private errHandler: ErrorHandlerService) {}

  getPokeTypes(pokename: string): Observable<any> {
    const url = `${this.env.pokeApiUrl}types?name=${pokename}`;
    return this.http.get(url, this.env.httpOptionsJson).pipe(
     catchError(this.errHandler.handle));
  }

  getInfo(pokename: string): Observable<any> {
    const url = `${this.env.pokeApiUrl}pokemon?name=${pokename}`;
    return this.http.get(url, this.env.httpOptionsJson).pipe(
      catchError(this.errHandler.handle));
  }
}
