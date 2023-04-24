const add = require('./add');

describe('add', () => {
  it('adds 2 and 2', () => {
    const result = add(2,2);
    expect(result).toBe(4);

  });

  it('adds 5 and 0', () => {
    const result = add(5,0);
    expect(result).toBe(5);
  })
});