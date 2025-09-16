import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RatingFilter } from "./RatingFilter.jsx";
import userEvent from "@testing-library/user-event";

describe("RatingFilter component", () => {
  it("should render stars and handle rating selection", async () => {
    // Arrange
    const onRatingChange = vi.fn();
    const user = userEvent.setup();

    // Act
    render(<RatingFilter currentRating={3} onRatingChange={onRatingChange} />);
    const starButtons = screen.getAllByRole("button");
    await user.click(starButtons[3]);

    // Assert
    expect(starButtons.length).toBe(5);
    expect(onRatingChange).toHaveBeenCalledTimes(1);
    expect(onRatingChange).toHaveBeenCalledWith("rating", 4);
  });
});
