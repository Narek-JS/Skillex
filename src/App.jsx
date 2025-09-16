import React, { useState, useMemo } from "react";
import { data as products } from "./data/mockData";
import { useDebounce } from "./hooks/useDebounce";
import { filterProducts } from "./utils";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const initialMaxPrice = Math.ceil(Math.max(...products.map((p) => p.price)));
  const allCategories = [...new Set(products.map((p) => p.category))];
  const allBrands = [...new Set(products.map((p) => p.brand))];

  const [filters, setFilters] = useState({
    priceRange: [0, initialMaxPrice],
    category: [],
    brand: [],
    rating: 0,
  });

  const debouncedPriceRange = useDebounce(filters.priceRange, 200);

  const filterOptions = {
    priceRange: [0, initialMaxPrice],
    categories: allCategories,
    brands: allBrands,
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (filterType === "category" || filterType === "brand") {
        const currentValues = newFilters[filterType];
        if (currentValues.includes(value)) {
          newFilters[filterType] = currentValues.filter(
            (item) => item !== value
          );
        } else {
          newFilters[filterType] = [...currentValues, value];
        }
      } else {
        newFilters[filterType] = value;
      }

      return newFilters;
    });
  };

  const filteredProducts = useMemo(() => {
    const filtersWithDebouncedPrice = {
      ...filters,
      priceRange: debouncedPriceRange,
    };
    return filterProducts(products, filtersWithDebouncedPrice);
  }, [debouncedPriceRange, filters]);

  return (
    <div className="font-sans bg-[#ebebeb] min-h-screen">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-[#F9FAFB] rounded-lg shadow-md p-4 flex flex-col md:flex-row">
          <FilterSidebar
            filters={filters}
            filterOptions={filterOptions}
            onFilterChange={handleFilterChange}
          />
          <div className="w-full md:w-3/4 px-4 pt-2">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Shop Products
            </h1>
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
