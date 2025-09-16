import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import userEvent from "@testing-library/user-event";
import CategoryFilter from "./CategoryFilter.jsx";

describe("CategoryFilter component", () => {
  it("should render categories and handle selection", async () => {
    // Arrange
    const categories = ["Electronics", "Clothing", "Footwear"];
    const selectedCategories = ["Clothing"];
    const onCategoryChange = vi.fn();
    const user = userEvent.setup();

    render(
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={onCategoryChange}
      />
    );

    // Act
    await user.click(screen.getByLabelText("Electronics"));

    // Asserts
    expect(screen.getByLabelText("Electronics")).toBeInTheDocument();
    expect(screen.getByLabelText("Clothing")).toBeInTheDocument();
    expect(screen.getByLabelText("Footwear")).toBeInTheDocument();
    expect(screen.getByLabelText("Clothing")).toBeChecked();
    expect(screen.getByLabelText("Electronics")).not.toBeChecked();

    // Assert
    expect(onCategoryChange).toHaveBeenCalledTimes(1);
    expect(onCategoryChange).toHaveBeenCalledWith("category", "Electronics");
  });
});
