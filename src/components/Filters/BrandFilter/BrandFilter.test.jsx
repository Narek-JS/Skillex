import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrandFilter } from "./BrandFilter.jsx";
import userEvent from "@testing-library/user-event";

describe("BrandFilter component", () => {
  it("should render brands and handle selection", async () => {
    // Arrange
    const brands = ["TechGear", "FashionHub", "HomeEssentials"];
    const selectedBrands = ["TechGear"];
    const onBrandChange = vi.fn();
    const user = userEvent.setup();

    render(
      <BrandFilter
        brands={brands}
        selectedBrands={selectedBrands}
        onBrandChange={onBrandChange}
      />
    );

    // Act
    await user.click(screen.getByLabelText("FashionHub"));

    // Asserts
    expect(screen.getByLabelText("TechGear")).toBeInTheDocument();
    expect(screen.getByLabelText("FashionHub")).toBeInTheDocument();
    expect(screen.getByLabelText("TechGear")).toBeChecked();
    expect(screen.getByLabelText("FashionHub")).not.toBeChecked();
    expect(onBrandChange).toHaveBeenCalledTimes(1);
    expect(onBrandChange).toHaveBeenCalledWith("brand", "FashionHub");
  });
});
