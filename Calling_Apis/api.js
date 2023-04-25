const Pokemon = require('./pokemon');

const fetchPokemon = (pokemon) => {
  return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
  .then((response) => response.json())
  .then((data) => { 
    let types_arr = [];
    data.types.forEach (object => {
      types_arr.push(object.type.name);
    });
    const pokemon = new Pokemon(data.id, data.name, data.height, data.weight, types_arr);
    return pokemon;
  });
}

module.exports = fetchPokemon;
