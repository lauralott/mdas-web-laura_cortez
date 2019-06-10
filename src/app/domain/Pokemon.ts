import {PokeName} from '../domain/PokeName';
import { pokeType } from './pokeType';
import { TotalPokeFavs } from './TotalPokeFavs';
import { PokeTypeList } from './PokeTypeList';
import { PokeListItem } from './PokeListItem';

export class Pokemon {
    pokeName: PokeName;
    pokeTypes: PokeListItem[];
    totalPokeFavs: TotalPokeFavs;
    constructor(){}

}