const prefix = '🐉 ';

export default async function updateOutput(id: string) {
  // Todo
}

// Run our samples
runTheLearningSamples();

function runTheLearningSamples() {
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id = ${id} and name = ${name}`);
  }
  displayProductInfo(10, "pizza");

  // Function declarations are hoisted: If you want to be able to call a function before it's actually declared, then you want to take advantage of the hoisting with function declarations.
  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7, 20));

  function addNumbersDeclaration(x: number, y: number) {
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
}