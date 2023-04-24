const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 2 and 2', () => {
    const result = multiply(2,2);
    expect(result).toBe(4);

  });

  it('multiplies 5 and 0', () => {
    const result = multiply(5,0);
    expect(result).toBe(0);
  })
});