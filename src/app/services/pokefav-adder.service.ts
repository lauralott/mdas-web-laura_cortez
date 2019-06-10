import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { tap, catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokefavAdderService {

  constructor(private http: HttpClient, private env:EnvironmentService, 
    private errHandler: ErrorHandlerService) { }

  add(pokename: string, userId: string) : Observable<string> {
    let data: any = "";
    const url = `${this.env.pokeApiUrl}addFavorite?name=${pokename}&user=${userId}`;
    return this.http.post<string>(url, data, this.env.httpOptionsJson).pipe(
      tap(results => console.log(results)),catchError(this.errHandler.handle));
  }
}
