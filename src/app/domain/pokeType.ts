export class pokeType {
    slot: number;
    name: string;
    color: string;
    colorMapper: Map<string, string> = new Map([
        ['electric', 'gold'],
        ['flying', 'plum'],
        ['fire', 'orange'],
        ['ice', 'skyblue'],
        ['water', 'dodgerblue'],
        ['grass', 'limegreen'],
        ['fighting', 'darkred'],
        ['poison', 'darkmagenta'],
        ['normal', 'tan'],
        ['ground', 'navajowhite'],
        ['psychic', 'hotpink'],
        ['bug', 'olivedrab'],
        ['rock', 'darkgoldenrod'],
        ['ghost', 'rebeccapurple'],
        ['dark', 'dimgrey'],
        ['dragon', 'slateblue'],
        ['steel', 'gainsboro'],
        ['fairy', 'pink'],
    ]);
    public constructor(name: string) {
        console.log(name);
        this.name = name;
        this.color = this.colorMapper.get(this.name);
        console.log(this.color);
    }
}