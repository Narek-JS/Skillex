import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function PriceRangeFilter({ min, max, value, onPriceChange }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Price Range</h3>
      <div className="p-2">
        <Slider
          range
          min={min}
          max={max}
          value={value}
          onChange={(newValue) => onPriceChange("priceRange", newValue)}
          styles={{
            track: { backgroundColor: "#f59e0b" },
            handle: {
              borderColor: "#f59e0b",
              backgroundColor: "white",
              opacity: 1,
            },
          }}
        />
      </div>
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  );
}

export { PriceRangeFilter };
