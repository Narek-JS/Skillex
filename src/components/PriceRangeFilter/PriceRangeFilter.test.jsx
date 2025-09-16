import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PriceRangeFilter from "./PriceRangeFilter.jsx";

vi.mock("rc-slider", () => ({
  default: ({ value, onChange }) => (
    <div data-testid="mock-slider">
      <input
        type="text"
        value={value.join(",")}
        onChange={(e) => {
          const newValues = e.target.value.split(",").map(Number);
          onChange(newValues);
        }}
      />
    </div>
  ),
}));

describe("PriceRangeFilter component", () => {
  it("should display the correct range and handle changes", () => {
    // Arrange
    const onPriceChange = vi.fn();
    const initialRange = [50, 150];

    render(
      <PriceRangeFilter
        min={0}
        max={200}
        value={initialRange}
        onPriceChange={onPriceChange}
      />
    );

    // Act
    const mockSliderInput = screen
      .getByTestId("mock-slider")
      .querySelector("input");
    fireEvent.change(mockSliderInput, { target: { value: "75,125" } });

    // Asserts
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();
    expect(onPriceChange).toHaveBeenCalledTimes(1);
    expect(onPriceChange).toHaveBeenCalledWith("priceRange", [75, 125]);
  });
});
