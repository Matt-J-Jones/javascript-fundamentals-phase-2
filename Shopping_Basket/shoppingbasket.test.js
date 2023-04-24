const ShoppingBasket = require('./shoppingbasket');
const Candy = require('./candy');

describe('Create Basket Object', () => {
  it ('returns zero value on empty basket', () => {
    const basket = new ShoppingBasket;
    expect(basket.getTotalPrice()).toBe(0);
  });

  it ('creates a fake candy object & adds to basket, returns 4.99 total value', () => {
    const basket = new ShoppingBasket;
    expect(basket.getTotalPrice()).toBe(0);

    const candyDouble = {
      getPrice: () => 4.99,
      getName: () => 'Mars'
    };

    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toBe(4.99);
  });

  it ('creates a fake candy object & adds to basket twice, returns list', () => {
    const basket = new ShoppingBasket;
    expect(basket.getTotalPrice()).toBe(0);

    const candyDouble = {
      getPrice: () => 4.99,
      getName: () => 'Mars'
    };

    basket.addItem(candyDouble);
    basket.addItem(candyDouble);

    expect(basket.getList()).toEqual([ 'Mars', 'Mars' ]);
  });

  it ('creates a candy objects & adds to basket, returns 12.97 total value', () => {
    const basket = new ShoppingBasket;
    expect(basket.getTotalPrice()).toBe(0);
    const candy = new Candy ('Mars', 4.99);
    basket.addItem(candy);
    expect(basket.getTotalPrice()).toBe(4.99);

    basket.addItem(new Candy('Skittle', 3.99));
    basket.addItem(new Candy('Skittle', 3.99));
    
    expect(basket.getTotalPrice()).toBe(12.97);
  });

  it ('creates a fake candy object & adds to basket, applies discount and returns 4.50 total value', () => {
    const basket = new ShoppingBasket;
    expect(basket.getTotalPrice()).toBe(0);

    const candyDouble = {
      getPrice: () => 5.00,
      getName: () => 'Snickers'
    };

    basket.addItem(candyDouble);
    basket.applyDiscount(10);
    expect(basket.getTotalPrice()).toBe(4.50);
  });
})