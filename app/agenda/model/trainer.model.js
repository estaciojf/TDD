export default class Trainer {

  constructor(name){
    this.name = name
    this.pokemon;
  }

  setName(name){
    this.name = name
  }

  getName(){
    return this.name;
  }

  addPokemon(pokemon){
    this.pokemon = pokemon
  }

  getPokemon(pokemonName){
    return this.pokemon.name;
  }





}
