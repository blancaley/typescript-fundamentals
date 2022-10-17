// Interfaces are code contracts
// Use interfaces to define the shape of data

// Interface definitions can be used to represent 
// the shape of an OBJECT-like data structure
export interface Product {
  id: number;
  name: string;
  icon: string;
  description?: string;
  validate(): boolean;
}

// Examples of using a type alias
// Type alias declarations can be used to represent
// primitive types AND object-like data structures.
type ProductAlias =
  | string
  | number
  | {
      id: number;
      name: string;
      icon: string;
      description?: string;
    };

let product: ProductAlias = 'Food';

// Using a type alias versus an enum
enum ProductType {
  Sporting,
  Home,
}

// String literal type, to avoid magic strings
type ProductTypeList = 'SPORTING' | 'HOME';
let p: ProductTypeList = 'SPORTING';
