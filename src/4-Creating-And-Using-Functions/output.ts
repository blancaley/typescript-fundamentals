import { productsURL } from "../lib";

const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
}

export default async function updateOutput(id: string) {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if(output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: ProductType[]) {
  const items = products.map(p => {
    const productHtml = `
    <span class="card-id">#${p.id}</span>
      <i class="card-icon" ${p.icon} fa-lg></i>
    <span class="card-name">${p.name}</span>
    `;
    const cardHtml = `
    <li>
      <div class="card">
        <div class="card-content">
          <div class="content">
          ${productHtml}
          </div>
        </div>
      </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join("")}</ul>`;
  return productsHtml;
}

async function getProducts(): Promise<ProductType[]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
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

  // Arrow function
  const getProductById2 = (id: number): ProductType | undefined =>
    sampleProducts.find(p => id === p.id);

    getProductById2(10);

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

  // Optional parameters: Add question mark
  const getRandomInt = (max: number = 1000) => Math.floor(Math.random() * max);

  function createProduct(name: string, icon?: string,): ProductType {
    const id = getRandomInt(1000);

    return {
      id, 
      name, 
      icon
    }
  }

  console.log(`${prefix} Optional parameters`)
  let pinapple = createProduct("pinapple", "pine-apple.jpg");
  let mango = createProduct("mango");
  console.log(pinapple, mango);

  // Default Parameters
  function createProductWithDefaults(
    name: string, 
    icon: string = "generic-fruit.jpg"
    ): ProductType {
    const id = getRandomInt();

    return {
      id, 
      name, 
      icon
    }
  }

  console.log(`${prefix} Default parameters`)
  pinapple = createProductWithDefaults("pinapple", "pine-apple.jpg");
  mango = createProductWithDefaults("mango");
  console.log(pinapple, mango);

  // Rest parameters: When you don't know how many parameters you might be passing in
  function buildAddress(street: string, city: string, ...restOfAdress: string[]) {
    console.table(restOfAdress);
    const address = `${street} ${city} ${restOfAdress.join(" ")}`;
    return address;
  }

  const someAddress = buildAddress(
    "1 lois lane", // street
    "smallville", // city
    "apt 101",  // rest arg [0]
    "area 51",  // rest arg [1]
    "mystery country"); // rest arg [2]

  console.log(`${prefix} Rest parameters`);
  console.log(someAddress);
}