import { Component } from '@angular/core';
import { pokeType } from '../domain/pokeType';
import { PokefinderService } from '../services/pokefinder.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../domain/pokemon';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  catchAll: Boolean = false;
  pokename: string;
  pokeTypes: pokeType[] = [];
  searchOption: any;
  pokemon: Pokemon;
  totalPokeFavs: string;
  constructor(private pokeFinder:PokefinderService) {}

  catch(form){
    this.pokename = "";
    this.pokeTypes = [];
    this.totalPokeFavs = undefined;
    if (this.catchAll){
      this.pokeFinder.getInfo(form.value.pokename).subscribe(pokemon => {
        this.pokemon = pokemon;
        this.pokename = pokemon.pokeName.pokeName;
        this.totalPokeFavs = this.pokemon.totalPokeFavs.totalFavs;
        console.log(this.pokemon.pokeTypes);
        for (var list in this.pokemon.pokeTypes) {
          console.log(`this list: ${list}, lenght: ${list.length}`);
          this.pokeTypes.push(new pokeType(pokemon.pokeTypes[list].name)); 
        }
      });
    } else {
      this.pokeFinder.getPokeTypes(form.value.pokename).subscribe(types => {
        for (var type in types) {
          this.pokeTypes.push(new pokeType(types[type].name)); 
        }
        this.pokename = form.value.pokename;
      });
    }
  }

  optionChanged(){
    console.log(this.catchAll);
    this.catchAll = !this.catchAll;
  }

}
