import React from "react";
import {
  PriceRangeFilter,
  CategoryFilter,
  RatingFilter,
  BrandFilter,
} from "../Filters";

function FilterSidebar({ filters, filterOptions, onFilterChange }) {
  return (
    <aside className="w-full bg-[#FFFFFF] rounded-lg md:w-1/4 p-4 ">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="space-y-6">
        <CategoryFilter
          categories={filterOptions.categories}
          selectedCategories={filters.category}
          onCategoryChange={onFilterChange}
        />
        <BrandFilter
          brands={filterOptions.brands}
          selectedBrands={filters.brand}
          onBrandChange={onFilterChange}
        />
        <PriceRangeFilter
          min={filterOptions.priceRange[0]}
          max={filterOptions.priceRange[1]}
          value={filters.priceRange}
          onPriceChange={onFilterChange}
        />
        <RatingFilter
          currentRating={filters.rating}
          onRatingChange={onFilterChange}
        />
      </div>
    </aside>
  );
}

export default FilterSidebar;
