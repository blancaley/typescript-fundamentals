const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
}

export default async function updateOutput(id: string) {
  // Todo
}

// Run our samples
runTheLearningSamples();

function runTheLearningSamples() {
  // Specifying typed parameters
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id = ${id} and name = ${name}`);
  }
  displayProductInfo(10, "pizza");

  // Function declarations are hoisted: If you want to be able to call a function before it's actually declared, then you want to take advantage of the hoisting with function declarations.
  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7, 20));

  function addNumbersDeclaration(x: number, y: number): number {
    const sum: number = x + y;
    return sum
  }

  // Function expression: If you want to make sure that everything is declared before it's being used and enforce that, a function expression can really help you out.
  const addNumbersExpression = function (x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(7, 21));

  const sampleProducts = [
    {
      id: 10,
      name: "Pizza slice",
      icon: "fas fa-pizza-slice",
    },
    {
      id: 20,
      name: "Ice cream",
      icon: "fas fa-ice-cream",
    },
    {
      id: 30,
      name: "Cheese",
      icon: "fas fa-cheese",
    } 
  ];

  // Return array
  function getProductNames(): string[] {
    return sampleProducts.map(p => p.name);
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames());

  // Return Product Type
  function getProductById(id: number): ProductType | undefined {
    return sampleProducts.find(p => id === p.id);
  }

  console.log(`${prefix} return ProductType`);
  console.log(getProductById(10));

  // Return void
  function displayProducts(products: ProductType[]): void {
    const productNames = products.map(p => {
      const name = p.name.toLowerCase();
      return name;
    });
    const msg = `Sample products include: ${productNames.join(", ")}`;
    console.log(`${prefix} return void`);
    console.log(msg)
  }

  displayProducts(sampleProducts);
}