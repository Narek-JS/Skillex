import React from "react";
import { StarRating } from "../shared";

function ProductCard({ product }) {
  const { name, brand, price, rating, imageUrl } = product;
  const formattedPrice = price.toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col text-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="flex-grow">
        <p className="text-sm text-gray-500 mb-1">{brand}</p>
        <h3 className="text-base font-semibold text-gray-800 mb-3 leading-tight">
          {name}
        </h3>
      </div>
      <div className="flex items-center justify-center mt-2">
        <StarRating rating={rating} />
        <span className="text-gray-600 text-sm ml-2">{rating.toFixed(1)}</span>
      </div>
      <p className="text-xl font-bold text-red-500 mt-3">${formattedPrice}</p>
    </div>
  );
}

export default ProductCard;
