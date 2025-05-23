import { add, multiply, greet } from "./utils";

/**
 * Main function that demonstrates the utility functions
 */
function main() {
  console.log("TypeScript Example Application");
  console.log("---------------------------------");

  // Demonstrate the utility functions
  const num1 = 5;
  const num2 = 10;

  console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
  console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
  console.log(greet("TypeScript Developer"));
}

// Run the main function if this file is executed directly
if (require.main === module) {
  main();
}

// Export the main function for testing or importing
export { main };
