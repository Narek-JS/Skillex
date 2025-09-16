// src/components/FilterSidebar/FilterSidebar.test.jsx

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FilterSidebar from "./FilterSidebar.jsx";

vi.mock("../CategoryFilter/CategoryFilter.jsx", () => ({
  default: () => <div>Category Filter</div>,
}));
vi.mock("../BrandFilter/BrandFilter.jsx", () => ({
  default: () => <div>Brand Filter</div>,
}));
vi.mock("../PriceRangeFilter/PriceRangeFilter.jsx", () => ({
  default: () => <div>Price Range Filter</div>,
}));
vi.mock("../RatingFilter/RatingFilter.jsx", () => ({
  default: () => <div>Rating Filter</div>,
}));

describe("FilterSidebar component", () => {
  it("should render all filter components", () => {
    // Arrange
    const props = {
      filters: { category: [], brand: [], priceRange: [0, 1000], rating: 0 },
      filterOptions: { categories: [], brands: [], priceRange: [0, 1000] },
      onFilterChange: vi.fn(),
    };

    // Act
    render(<FilterSidebar {...props} />);

    // Assert
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("Price Range")).toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();
  });
});
