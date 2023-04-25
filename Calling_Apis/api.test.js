const fetchPokemon = require('./api')
const Pokemon = require('./pokemon');

describe('fetchPokemon', () => {
  it('returns a promise of pokemon data', async () => {
    const pokemon = await fetchPokemon('pikachu')
    expect(pokemon.getId()).toEqual(25);
    });
});