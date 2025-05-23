"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../src/utils");
describe("Utils module", () => {
    describe("add function", () => {
        it("should add two positive numbers correctly", () => {
            expect((0, utils_1.add)(2, 3)).toBe(5);
        });
        it("should handle negative numbers", () => {
            expect((0, utils_1.add)(-1, -2)).toBe(-3);
            expect((0, utils_1.add)(-1, 5)).toBe(4);
        });
        it("should handle zero", () => {
            expect((0, utils_1.add)(0, 5)).toBe(5);
            expect((0, utils_1.add)(5, 0)).toBe(5);
            expect((0, utils_1.add)(0, 0)).toBe(0);
        });
    });
    describe("multiply function", () => {
        it("should multiply two positive numbers correctly", () => {
            expect((0, utils_1.multiply)(2, 3)).toBe(6);
        });
        it("should handle negative numbers", () => {
            expect((0, utils_1.multiply)(-1, -2)).toBe(2);
            expect((0, utils_1.multiply)(-1, 5)).toBe(-5);
        });
        it("should handle zero", () => {
            expect((0, utils_1.multiply)(0, 5)).toBe(0);
            expect((0, utils_1.multiply)(5, 0)).toBe(0);
            expect((0, utils_1.multiply)(0, 0)).toBe(0);
        });
    });
    describe("greet function", () => {
        it("should return the correct greeting message", () => {
            expect((0, utils_1.greet)("John")).toBe("Hello, John!");
        });
        it("should work with empty string", () => {
            expect((0, utils_1.greet)("")).toBe("Hello, !");
        });
    });
});
