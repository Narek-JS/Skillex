import { describe, it, expect } from "vitest";
import { filterProducts } from "./filterUtils";

const mockProducts = [
  {
    id: 1,
    name: "Test Laptop",
    category: "Test Electronics",
    brand: "Test Brand A",
    price: 1200,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Test T-Shirt",
    category: "Test Clothing",
    brand: "Test Brand B",
    price: 25,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Test Mouse",
    category: "Test Electronics",
    brand: "Test Brand A",
    price: 50,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Test Jeans",
    category: "Test Clothing",
    brand: "Test Brand C",
    price: 80,
    rating: 4.2,
  },
];

describe("filterProducts utility", () => {
  it("should return all products if no filters are applied", () => {
    // Arrange
    const filters = {
      priceRange: [0, 2000],
      category: [],
      brand: [],
      rating: 0,
    };

    // Act
    const result = filterProducts(mockProducts, filters);

    // Assert
    expect(result.length).toBe(4);
  });

  it("should filter by a single category", () => {
    // Arrange
    const filters = {
      category: ["Test Clothing"],
      brand: [],
      priceRange: [0, 2000],
      rating: 0,
    };

    // Act
    const result = filterProducts(mockProducts, filters);

    // Assert
    expect(result.length).toBe(2);
    expect(result.every((p) => p.category === "Test Clothing")).toBe(true);
  });

  it("should filter by price range", () => {
    // Arrange
    const filters = {
      category: [],
      brand: [],
      priceRange: [40, 100],
      rating: 0,
    };

    // Act
    const result = filterProducts(mockProducts, filters);

    // Assert
    expect(result.length).toBe(2); // Mouse ($50) and Jeans ($80)
    expect(result.map((p) => p.name)).toEqual(["Test Mouse", "Test Jeans"]);
  });

  it("should handle multiple filters combined (category and brand)", () => {
    // Arrange
    const filters = {
      category: ["Test Clothing"],
      brand: ["Test Brand C"],
      priceRange: [0, 2000],
      rating: 0,
    };

    // Act
    const result = filterProducts(mockProducts, filters);

    // Assert
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Test Jeans");
  });

  it("should return an empty array if no products match", () => {
    // Arrange
    const filters = {
      category: ["Electronics"],
      brand: ["Brand B"],
      priceRange: [0, 2000],
      rating: 0,
    };

    // Act
    const result = filterProducts(mockProducts, filters);

    // Assert
    expect(result.length).toBe(0);
  });
});
