import React from "react";

const filters = [
  { name: "All", value: "all" },
  { name: "Favorites", value: "favorites" },
  { name: "Read", value: "read" },
  { name: "Unread", value: "unread" },
];

function FilterButtons({ onFilterChange, activeFilter }) {
  return (
    <div className="flex gap-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`px-4 py-2 rounded-md ${
            activeFilter === filter.value
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-neutral-800"
          }`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
