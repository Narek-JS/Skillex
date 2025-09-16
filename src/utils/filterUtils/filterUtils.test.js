import { describe, test, expect } from "vitest";
import { filterAndSortProducts } from "./filterUtils";

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

const defaultFilters = {
  priceRange: [0, 2000],
  category: [],
  brand: [],
  rating: 0,
};

describe("filterAndSortProducts utility", () => {
  test("should return all products if no filters, search, or sort are applied", () => {
    // Arrange & Act
    const result = filterAndSortProducts(
      mockProducts,
      defaultFilters,
      "",
      "popularity"
    );

    // Assert
    expect(result.length).toBe(4);
  });

  test("should filter by a single category", () => {
    // Arrange
    const filters = { ...defaultFilters, category: ["Test Clothing"] };

    // Act
    const result = filterAndSortProducts(
      mockProducts,
      filters,
      "",
      "popularity"
    );

    // Assert
    expect(result.length).toBe(2);
    expect(result.every((p) => p.category === "Test Clothing")).toBe(true);
  });

  test("should filter by search term (case-insensitive)", () => {
    // Arrange
    const searchTerm = "laptop";

    // Act
    const result = filterAndSortProducts(
      mockProducts,
      defaultFilters,
      searchTerm,
      "popularity"
    );

    // Assert
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Test Laptop");
  });

  test("should sort by price: low to high", () => {
    // Arrange
    const sortOption = "priceLowToHigh";

    // Act
    const result = filterAndSortProducts(
      mockProducts,
      defaultFilters,
      "",
      sortOption
    );

    // Assert
    const prices = result.map((p) => p.price);
    expect(prices).toEqual([25, 50, 80, 1200]);
  });

  test("should sort by price: high to low", () => {
    // Arrange
    const sortOption = "priceHighToLow";

    // Act
    const result = filterAndSortProducts(
      mockProducts,
      defaultFilters,
      "",
      sortOption
    );

    // Assert
    const prices = result.map((p) => p.price);
    expect(prices).toEqual([1200, 80, 50, 25]);
  });

  test("should sort by rating (high to low)", () => {
    // Arrange
    const sortOption = "rating";

    // Act
    const result = filterAndSortProducts(
      mockProducts,
      defaultFilters,
      "",
      sortOption
    );

    // Assert
    const ratings = result.map((p) => p.rating);
    expect(ratings).toEqual([4.8, 4.5, 4.2, 4.0]);
  });

  test("should filter by category and then sort the results", () => {
    // Arrange
    const filters = { ...defaultFilters, category: ["Test Electronics"] };
    const sortOption = "priceLowToHigh";

    // Act
    const result = filterAndSortProducts(mockProducts, filters, "", sortOption);

    // Assert
    expect(result.length).toBe(2);
    const names = result.map((p) => p.name);
    expect(names).toEqual(["Test Mouse", "Test Laptop"]);
  });
});
