import React, { useState } from "react";
import { StarRating } from "../shared";
import classNames from "classnames";

function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col text-center">
      <div className="relative">
        <img
          className={classNames("w-full h-48 object-cover rounded-md mb-4", {
            "opacity-0": !imageLoaded,
          })}
          onLoad={() => setImageLoaded(true)}
          src={product.imageUrl}
          alt={product.name}
        />
        {!imageLoaded && (
          <div className="w-full h-48 bg-gray-200 animate-pulse rounded-md mb-4 absolute top-0 left-0" />
        )}
      </div>
      <div className="flex-grow">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="text-base font-semibold text-gray-800 mb-3 leading-tight">
          {product.name}
        </h3>
      </div>
      <div className="flex items-center justify-center mt-2">
        <StarRating rating={product.rating} />
        <span className="text-gray-600 text-sm ml-2">
          {product.rating.toFixed(1)}
        </span>
      </div>
      <p className="text-xl font-bold text-red-500 mt-3">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}

export default ProductCard;
