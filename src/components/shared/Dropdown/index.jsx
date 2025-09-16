import React, { useState, useRef, useEffect } from "react";

function Dropdown({
  options,
  selectedValue,
  onSelect,
  placeholder = "Select...",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((o) => o.value === selectedValue)?.label || placeholder;

  return (
    <div ref={containerRef} className="relative w-full max-w-[270px]">
      <button
        type="button"
        className="flex items-center justify-between w-full h-[38px] rounded-md  border-gray-300 bg-transparent pl-3 pr-3 shadow-sm sm:text-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">{selectedLabel}</span>
        <span className="ml-2 text-gray-400 text-sm">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`px-3 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 ${
                selectedValue === option.value ? "bg-gray-100 font-medium" : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { Dropdown };
