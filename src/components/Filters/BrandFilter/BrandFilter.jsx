import React from "react";

function BrandFilter({ brands, selectedBrands, onBrandChange }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Brand</h3>
      <div className="space-y-2">
        {brands.map((brand) => (
          <div key={brand} className="flex items-center">
            <input
              type="checkbox"
              id={brand}
              name={brand}
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => onBrandChange("brand", brand)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor={brand} className="ml-3 text-sm text-gray-600">
              {brand}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export { BrandFilter };
