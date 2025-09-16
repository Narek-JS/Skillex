import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortFilter from "./SortFilter";

describe("SortFilter", () => {
  test("should open dropdown, select an option, and call the handler", async () => {
    // Arrange
    const user = userEvent.setup();
    const handleSortChange = vi.fn();
    render(
      <SortFilter sortOption="popularity" onSortChange={handleSortChange} />
    );
    const dropdownButton = screen.getByRole("button", { name: /Popularity/ });

    // Act
    await user.click(dropdownButton);
    const optionToSelect = screen.getByText("Price: High to Low");
    await user.click(optionToSelect);

    // Assert
    expect(handleSortChange).toHaveBeenCalledTimes(1);
    expect(handleSortChange).toHaveBeenCalledWith({
      target: { value: "priceHighToLow" },
    });
  });
});
