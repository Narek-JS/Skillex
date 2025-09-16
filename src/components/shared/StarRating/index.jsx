import React from "react";
import { StarIcon } from "../../Icons";

function StarRating({ rating }) {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<StarIcon key={i} className="text-yellow-400" />);
    } else {
      stars.push(<StarIcon key={i} className="text-gray-300" />);
    }
  }

  return <div className="flex items-center">{stars}</div>;
}

export { StarRating };
