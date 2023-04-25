const fetchPokemon = require('./api');
const Pokemon = require('./pokemon');
const Pokedex = require('./pokedex');

describe('create pokedex', () => {
  it('creates an empty pokedex', () => {
    pokedex = new Pokedex;
    expect(pokedex.all()).toEqual([]);
  });

  it('creates pokedex, adds pokemon', async () => {
    pokedex = new Pokedex;
    await pokedex.catch('pikachu');
    expect(pokedex.all()).toEqual(['pikachu']);
  })

  it('creates pokedex, adds 2 pokemon', async () => {
    pokedex = new Pokedex;
    await pokedex.catch('pikachu');
    await pokedex.catch('psyduck');
    expect(pokedex.all()).toEqual(['pikachu', 'psyduck']);
  })
});