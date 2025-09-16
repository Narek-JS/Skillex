import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";

describe("App component integration tests", () => {
  it("should filter products when a category is selected", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<App />);

    // Act
    const initialProduct = await screen.findByText("Wireless Headphones");
    expect(initialProduct).toBeInTheDocument();

    const clothingCheckbox = screen.getByLabelText("Clothing");
    await user.click(clothingCheckbox);

    // Assert
    expect(screen.queryByText("Wireless Headphones")).not.toBeInTheDocument();
  });
});
