import { Product } from './interfaces';
// Class foundation to build upon (extend)
abstract class ProductBase implements Product {
  constructor(public id: number, public name: string, public icon: string) { }
  
  validate() : boolean {
    throw new Error("Not implemented");
  }
}

// Derived (child) class
export class FoodProduct extends ProductBase {
  // functions
  // the !! operator converts any object to a boolean value
  validate() : boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}

// Derived (child) class
// You have to contain a "super" call to have a constructor in a child class
class SportingGoodsProduct extends ProductBase {
  constructor(id: number, name: string, icon: string) {
    super(id, name, icon)
  }
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
