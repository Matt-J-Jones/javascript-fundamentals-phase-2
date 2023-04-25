const Pokemon = require('./pokemon');

describe('Create Pokemon', () => {
  it ('Creates Pokemon, Returns Correct Values', () => {
    pikachu = new Pokemon(25, 'pikachu', 4, 60, ['electric']);

    expect(pikachu.getId()).toBe(25);
    expect(pikachu.getName()).toBe('pikachu');
    expect(pikachu.getHeight()).toBe(4);
    expect(pikachu.getWeight()).toBe(60);
    expect(pikachu.getTypes()).toEqual(['electric']);
  });
});
