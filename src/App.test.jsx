import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import App from "./App.jsx";

describe("App component integration tests", () => {
  test("should filter products when a category is selected", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<App />);
    expect(await screen.findByText("Wireless Headphones")).toBeInTheDocument();
    expect(await screen.findByText("Leather Jacket")).toBeInTheDocument();
    const electronicsCheckbox = screen.getByLabelText("Electronics");

    // Act
    await user.click(electronicsCheckbox);

    // Assert
    expect(screen.queryByText("Leather Jacket")).not.toBeInTheDocument();
    expect(screen.getByText("Wireless Headphones")).toBeInTheDocument();
  });

  test("should filter by search term and then sort the results by price", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/search for products/i);
    const sortButton = screen.getByRole("button", { name: /Popularity/i });
    expect(await screen.findByText("Smartphone")).toBeInTheDocument();
    expect(await screen.findByText("Wireless Headphones")).toBeInTheDocument();

    // Act
    await user.type(searchInput, "o");

    // Assert
    await waitFor(() => {
      expect(screen.getByText("Smartphone")).toBeInTheDocument();
      expect(screen.getByText("Wireless Headphones")).toBeInTheDocument();
    });

    // Act
    await user.click(sortButton);
    const highToLowOption = await screen.findByText("Price: High to Low");
    await user.click(highToLowOption);

    // Assert
    await waitFor(() => {
      const allProductsText = screen.getByRole("main").textContent;
      const smartphonePosition = allProductsText.indexOf("Smartphone");
      const headphonesPosition = allProductsText.indexOf("Wireless Headphones");
      expect(smartphonePosition).toBeLessThan(headphonesPosition);
    });

    // Act
    const newSortButton = screen.getByRole("button", {
      name: /Price: High to Low/i,
    });
    await user.click(newSortButton);
    const lowToHighOption = await screen.findByText("Price: Low to High");
    await user.click(lowToHighOption);

    // Assert
    await waitFor(() => {
      const allProductsText = screen.getByRole("main").textContent;
      const smartphonePosition = allProductsText.indexOf("Smartphone");
      const headphonesPosition = allProductsText.indexOf("Wireless Headphones");
      expect(headphonesPosition).toBeLessThan(smartphonePosition);
    });
  });
});
