import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProductCard from "./ProductCard.jsx";

describe("ProductCard component", () => {
  it("should render product details correctly", () => {
    // Arrange
    const mockProduct = {
      id: 1,
      name: "Wireless Headphones",
      brand: "TechGear",
      price: 149.99,
      rating: 4.5,
      imageUrl: "/images/headphones.jpg",
    };

    // Act
    render(<ProductCard product={mockProduct} />);

    // Assert
    expect(screen.getByText("Wireless Headphones")).toBeInTheDocument();
    expect(screen.getByText("TechGear")).toBeInTheDocument();
    expect(screen.getByText("$149.99")).toBeInTheDocument();
    const image = screen.getByRole("img", { name: /Wireless Headphones/i });
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("/images/headphones.jpg");
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });
});
