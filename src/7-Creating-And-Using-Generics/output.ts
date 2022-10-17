import { productsURL, FoodProduct, customersURL } from '../lib';

const prefix = '🐉 ';

interface HasId {
  id: number;
}

class GenericModel<T extends HasId> {
  public items: T[] | undefined;
  constructor(public url: string) {}

  async getItems(): Promise<T[]> {
    this.items = await getList<T>(this.url);
    return this.items;
  }

  getItemById(id: number): T | undefined {
    return this.items ? this.items.find((p) => (id === p.id)) : undefined;
  }
}

const foodModel = new GenericModel<FoodProduct>(productsURL);

export default async function updateOutput(id: string = 'output') {
  // const products = await getProducts();
  // const products = await getList<FoodProduct>(productsURL);
  const products = await foodModel.getItems();

  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: FoodProduct[]): string {
  const items = products.map(({ id, name, icon }) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
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
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

async function getProducts(): Promise<FoodProduct[]> {
  const response: Response = await fetch(productsURL);
  const products: FoodProduct[] = await response.json();
  return products;
}

async function getList<T>(url: string): Promise<T[]> {
  const response: Response = await fetch(url);
  const items: T[] = await response.json();
  return items;
}

/************************************************
 * Learning sample code.
 ***********************************************/

runTheLearningSamples();

async function runTheLearningSamples() {
  // Repetitive code
  // Argument type and return type are same type
  // This function expects that you are going to pass in a number in and get a number back out.
  function whatIsIt_number(arg: number) : number {
    return arg;
  }

  console.log(`${prefix} Generics Overview`);
  console.log(whatIsIt_number(11));

  function whatIsIt_string(arg: string) : string {
    return arg;
  }
  console.log(whatIsIt_string("blanca"));

  // "Any" works but you lose all type safety.
  function whatIsIt_any(arg: any) : any {
    return arg;
  }
  console.log(whatIsIt_any(11));
  console.log(whatIsIt_any("john"));

  // Reusable code with generics and types
  // One function that handles any type that we pass in
  // This function is expecting to have a Type passed in
  // Type or T is a variable that represents a type
  function whatIsIt_typed<T>(arg: T) {
    return arg;
  }

  // "number" is the type that will be passed in.
  // The T becomes a number. The argument and return value have to be a number.
  let n = whatIsIt_typed<number>(11);
  let s = whatIsIt_typed<string>("blanca");
  let b = whatIsIt_typed<boolean>(true);

  console.log(n, s, b);
 }
