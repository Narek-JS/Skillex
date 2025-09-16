import React from "react";
import { Dropdown } from "../../shared";

const sortOptions = [
  { value: "rating", label: "Rating" },
  { value: "popularity", label: "Popularity" },
  { value: "priceHighToLow", label: "Price: High to Low" },
  { value: "priceLowToHigh", label: "Price: Low to High" },
];

function SortFilter({ sortOption, onSortChange }) {
  const handleSelect = (value) => {
    onSortChange({ target: { value } });
  };

  return (
    <Dropdown
      options={sortOptions}
      selectedValue={sortOption}
      onSelect={handleSelect}
    />
  );
}

export { SortFilter };
