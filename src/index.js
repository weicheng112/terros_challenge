"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const utils_1 = require("./utils");
/**
 * Main function that demonstrates the utility functions
 */
function main() {
    console.log("TypeScript Example Application");
    console.log("---------------------------------");
    // Demonstrate the utility functions
    const num1 = 5;
    const num2 = 10;
    console.log(`Addition: ${num1} + ${num2} = ${(0, utils_1.add)(num1, num2)}`);
    console.log(`Multiplication: ${num1} * ${num2} = ${(0, utils_1.multiply)(num1, num2)}`);
    console.log((0, utils_1.greet)("TypeScript Developer"));
}
// Run the main function if this file is executed directly
if (require.main === module) {
    main();
}
