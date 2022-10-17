// Creating and using a class
class FoodProduct {
  // properties/fields.
  // TS config strict - use default values, empty strings, so they're not undefined at run time

  // constructor
  // Allows to pass in initialization data
  // Auto implemented properties: Properties autogenerated by typescript. It generates AND assigns the incoming value to the constructor to that property. No need to define properties/fields above.
  // "Public": Add it for the consumer (outside) of FoodProduct to build, use and pass in id, name and icon.
  // "Private": If a property can ba passed in but it cannot be accessed, it needs to be private. Private to this class.
  constructor(public id: number, public name: string, public icon: string) {

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
