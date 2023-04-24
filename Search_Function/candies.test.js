const searchCandies = require('./candies');

describe('Search Candies', () => {
  it ('returns an array for candies begining with Ma and costing under 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });

  it ('returns an array for candies begining with Ma and costing under 2', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });

  it ('returns an array for candies begining with S and costing under 10', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it ('returns an array for candies begining with Ma and costing under 4', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });

  it ('returns an array for candies begining with ma and costing under 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
})