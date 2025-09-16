import React from "react";

function CategoryFilter({ categories, selectedCategories, onCategoryChange }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Category</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category} className="flex items-center">
            <input
              type="checkbox"
              id={category}
              name={category}
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange("category", category)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor={category} className="ml-3 text-sm text-gray-600">
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export { CategoryFilter };
