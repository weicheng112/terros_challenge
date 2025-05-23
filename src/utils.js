"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.multiply = multiply;
exports.greet = greet;
/**
 * Adds two numbers together
 * @param a First number
 * @param b Second number
 * @returns The sum of a and b
 */
function add(a, b) {
    return a + b;
}
/**
 * Multiplies two numbers
 * @param a First number
 * @param b Second number
 * @returns The product of a and b
 */
function multiply(a, b) {
    return a * b;
}
/**
 * Formats a greeting message
 * @param name Name to greet
 * @returns Formatted greeting
 */
function greet(name) {
    return `Hello, ${name}!`;
}
