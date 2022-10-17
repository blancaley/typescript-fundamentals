// Creating and using a class
class FoodProduct {
  // properties/fields.
  // TS config strict - use default values, empty strings, so they're not undefined at run time
  id = 0;
  name = "";
  icon = "";
  // constructor
  // Allows to pass in initialization data
  constructor(id: number, name: string, icon: string) {
    // Map incoming values to the properties above
    // "This" represents the instance at run time of this object
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
  // functions
}

// import { Product } from './interfaces';

// // This will act as the foundation for other Product type classes (FoodProduct, SportingProduct)
// abstract class ProductBase implements Product {
//   constructor(public id: number, public name: string, public icon: string) {}
//   validate(): boolean {
//     throw new Error('Not implemented');
//   }
// }

// export class FoodProduct extends ProductBase {
//   validate(): boolean {
//     return !!this.id && !!this.name && !!this.icon;
//   }
// }
