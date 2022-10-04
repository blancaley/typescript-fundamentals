// string, number, boolean, array, undefined, null, any

// Union type
let firstName: string | null;
firstName = "Jake";

let age: number;
age = 45;

// Type inference. TypeScript compiler will automatically infer the type on the right side of the equals.
let hasPurchased = true; 

let productNames: string[] = [];
productNames.push('Basketball');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);

let productType = 'sports'; // homeGoods, grocery ("magic string")
if (productType === 'sports') {
  console.log('Found sports product type.');
}

// Using Enums
// It allows us to find a constant list of values
// To avoid magic strings 

// Enum generates extra code, that's going to impact your bundle size, depending on how many items you have. 
// Add the word const on front, const enum, so it doesn't write out any enum at all. The downside of this is I have no way to get back to the string equivalent. JS only adds the comment next to it.

enum ProductType {
  Sports,
  HomeGoods,
  Groceries,
}
let pt = ProductType.HomeGoods;
if (pt === ProductType.HomeGoods) {
  console.log('Found sports product type.');
}
