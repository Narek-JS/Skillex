import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductList from "./ProductList.jsx";

vi.mock("../ProductCard/ProductCard", () => ({
  default: ({ product }) => (
    <div data-testid="product-card">{product.name}</div>
  ),
}));

const mockProducts = [
  {
    id: 1,
    name: "Test Product A",
    brand: "Test Brand X",
    price: 100,
    rating: 4,
    imageUrl: "Test url",
  },
  {
    id: 2,
    name: "Test Product B",
    brand: "Test Brand Y",
    price: 200,
    rating: 5,
    imageUrl: "Test url",
  },
];

describe("ProductList component", () => {
  it("should render a loading spinner when isLoading is true", () => {
    // Arrange
    const props = { products: [], isLoading: true };

    // Act
    render(<ProductList {...props} />);

    // Assert
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it('should render a "no products found" message when the product list is empty', () => {
    // Arrange
    const props = { products: [], isLoading: false };

    // Act
    render(<ProductList {...props} />);

    // Assert
    expect(screen.getByText("No products found.")).toBeInTheDocument();
  });

  it("should render a list of products correctly", () => {
    // Arrange
    const props = { products: mockProducts, isLoading: false };

    // Act
    render(<ProductList {...props} />);

    // Asserts
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards.length).toBe(2);
    expect(screen.getByText("Test Product A")).toBeInTheDocument();
    expect(screen.getByText("Test Product B")).toBeInTheDocument();
  });
});
