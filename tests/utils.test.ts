import { add, multiply, greet } from "../src/utils";

describe("Utils module", () => {
  describe("add function", () => {
    it("should add two positive numbers correctly", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("should handle negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
      expect(add(-1, 5)).toBe(4);
    });

    it("should handle zero", () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });
  });

  describe("multiply function", () => {
    it("should multiply two positive numbers correctly", () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it("should handle negative numbers", () => {
      expect(multiply(-1, -2)).toBe(2);
      expect(multiply(-1, 5)).toBe(-5);
    });

    it("should handle zero", () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });
  });

  describe("greet function", () => {
    it("should return the correct greeting message", () => {
      expect(greet("John")).toBe("Hello, John!");
    });

    it("should work with empty string", () => {
      expect(greet("")).toBe("Hello, !");
    });
  });
});
