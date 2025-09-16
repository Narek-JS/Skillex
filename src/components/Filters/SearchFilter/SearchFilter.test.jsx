import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { SearchFilter } from "./SearchFilter";

describe("SearchFilter", () => {
  test("renders the input and responds to user typing", () => {
    // Arrange
    const handleSearchChange = vi.fn();
    render(<SearchFilter searchTerm="" onSearchChange={handleSearchChange} />);
    const inputElement = screen.getByPlaceholderText(/search for products/i);
    expect(inputElement).toBeInTheDocument();

    // Act
    fireEvent.change(inputElement, { target: { value: "Headphones" } });

    // Assert
    expect(handleSearchChange).toHaveBeenCalledTimes(1);
  });
});
