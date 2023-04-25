const Pokemon = require('./pokemon');
const fetchPokemon = require('./api')

class Pokedex {
  constructor() {
    this.allPokemon = [];
  }

  async catch (name) { 
    let caughtPokemon = await fetchPokemon(name)
      .then((caughtPokemon) => this.allPokemon.push(caughtPokemon));
  }

  all() {
    let pokemon_list = []
    this.allPokemon.forEach (object => {
      pokemon_list.push(object.getName())
    })
    return pokemon_list;
  }
}

module.exports = Pokedex;
