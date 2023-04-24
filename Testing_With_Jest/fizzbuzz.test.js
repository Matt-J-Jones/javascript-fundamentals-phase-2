const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('receives 3 and returns Fizz', () => {
    const result = fizzbuzz(3);
    expect(result).toBe('Fizz');
  });

  it('receives 5 and returns Buzz', () => {
    const result = fizzbuzz(5);
    expect(result).toBe('Buzz');
  });

  it('receives 8 and returns 8', () => {
    const result = fizzbuzz(8);
    expect(result).toBe(8);
  });

  it('receives 15 and returns FizzBuzz', () => {
    const result = fizzbuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('receives 18 and returns Fizz', () => {
    const result = fizzbuzz(18);
    expect(result).toBe('Fizz');
  });

  it('receives 20 and returns Buzz', () => {
    const result = fizzbuzz(20);
    expect(result).toBe('Buzz');
  });
});