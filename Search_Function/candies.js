const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

//FIRST ATTEMPT:
//
// const filteredcandylist = (candies, value) => {
//   returned_candy = [];
//   filtered_list = candies.filter(candy => candy.price <= value);
//   filtered_list.forEach( candy => {
//     returned_candy.push(candy.name);
//   })
//   return returned_candy;
// }

// const filtercandybyprefix = (candies, string) => {
//   returned_candy = [];
//   filtered_list = candies.filter(candy => candy.includes(string));
//   filtered_list.forEach( candy => {
//     returned_candy.push(candy);
//   })
//   return returned_candy;
// }

// const searchCandies = (prefix, value) => {
//   temp = filteredcandylist(candies, value);
//   return filtercandybyprefix(temp, prefix);
// }

//REFACTORED CODE:
//
const searchCandies = (prefix, value) => {
  temp = [];
  const filtered_list = candies
    .filter(candy => candy.name.includes(prefix))
    .filter(candy => candy.price <= value);
  filtered_list.forEach( candy => {
    temp.push(candy.name);
  })
  return temp
}

module.exports = searchCandies;