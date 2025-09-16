import React from "react";
import { StarIcon } from "../../Icons";

function RatingFilter({ currentRating, onRatingChange }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      <h3 className="font-semibold mb-2">Rating</h3>
      <div className="flex space-x-1">
        {stars.map((starValue) => (
          <button
            key={starValue}
            onClick={() => onRatingChange("rating", starValue)}
            aria-label={`Select ${starValue} star rating`}
            className="focus:outline-none cursor-pointer rounded-md"
          >
            <StarIcon
              className={
                starValue <= currentRating
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-300"
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export { RatingFilter };
