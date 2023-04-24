const Candy = require('./candy');

describe('Create Candy', () => {
  it ('creates a new candy object and returns name', () => {
    const candy = new Candy ('Mars', 4.99);
    expect(candy.getName()).toBe('Mars');
  });

  it ('creates a new candy object and returns value', () => {
    const candy = new Candy ('Mars', 4.99);
    expect(candy.getPrice()).toBe(4.99);
  });
})