import { Component } from '@angular/core';
import { pokeType } from '../domain/pokeType';
import { PokefinderService } from '../services/pokefinder.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokename: string;
  pokeTypes: pokeType[] = [];
  constructor(private pokeFinder:PokefinderService) {}

  catch(form){
    this.pokename = "";
    this.pokeTypes = [];
    this.pokeFinder.getPokeTypes(form.value.pokename).subscribe(types => {
      for (var type in types) {
        this.pokeTypes.push(new pokeType(types[type].name)); 
      }
      this.pokename = form.value.pokename;
    });
  }
}
