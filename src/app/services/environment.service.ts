import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  httpOptionsJson = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  httpOptionsSimple = {
    headers: new HttpHeaders({'Content-Type': 'text/plain', 'responseType' : 'text'})
  };
  pokeApiUrl = "http://localhost:8080/";
  constructor() { }
}
