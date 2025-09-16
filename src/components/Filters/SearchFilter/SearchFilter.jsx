import React from "react";
import { SearchIcon } from "../../Icons";

function SearchFilter({ searchTerm, onSearchChange }) {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        className="block w-full h-[38px] rounded-md border-gray-300 pl-10 shadow-sm focus:outline-none focus:border-none sm:text-sm"
        placeholder="Search for products..."
        onChange={onSearchChange}
        value={searchTerm}
        type="text"
      />
    </div>
  );
}

export { SearchFilter };
