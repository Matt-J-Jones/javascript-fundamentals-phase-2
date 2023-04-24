const Candy = require('./candy');

class ShoppingBasket {

  constructor() {
    this.list = [];
    this.total = 0.00;
    this.discount = 0;
  }
  
  applyDiscount(discount) {
    this.discount = discount;
  }

  addItem(candy) {
    this.list.push(candy.getName())
    this.total += candy.getPrice()
  }

  getTotalPrice() {
    let total_price = this.total;
    return total_price - (total_price/100 * this.discount); 
  }

  getList() {
    return this.list;
  }
}


module.exports = ShoppingBasket;