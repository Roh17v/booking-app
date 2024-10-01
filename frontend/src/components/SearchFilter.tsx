import React from "react";
import { useSearchContext } from "../context/SearchFilterContext";

interface SearchFilterProps {
  handleSearchFilter: () => void;
}

const SearchFilter = ({ handleSearchFilter }: SearchFilterProps) => {
  const {
    priceRange,
    setPriceRange,
    propertyType,
    setPropertyType,
    rating,
    setRating,
  } = useSearchContext();

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxPrice = Number(e.target.value);
    setPriceRange([priceRange[0], maxPrice]);
  };

  const handlePropertyTypeChange = (type: string) => {
    setPropertyType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(+event.target.value);
  };

  return (
    <div className=" bg-white shadow-lg p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filter by:</h2>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h3 className="text-md font-medium">Price Range (per night)</h3>
        <input
          type="range"
          min="0"
          max="10000"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full mt-2"
        />
        <div className="text-sm text-gray-600 mt-1">
          ₹{priceRange[0]} - ₹{priceRange[1]}
        </div>
      </div>

      {/* Property Type Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-medium">Property Type</h3>
        <div className="flex flex-col mt-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              value="hotel"
              onChange={() => handlePropertyTypeChange("hotel")}
              className="mr-2"
            />
            Hotel
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="apartment"
              onChange={() => handlePropertyTypeChange("apartment")}
              className="mr-2"
            />
            Apartment
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="resort"
              onChange={() => handlePropertyTypeChange("resort")}
              className="mr-2"
            />
            Resort
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="resort"
              onChange={() => handlePropertyTypeChange("villa")}
              className="mr-2"
            />
            Villas
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="resort"
              onChange={() => handlePropertyTypeChange("cabin")}
              className="mr-2"
            />
            Cabins
          </label>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-medium">Star Rating</h3>
        <div className="flex flex-col mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="rating"
              value="5"
              onChange={handleRatingChange}
              className="mr-2"
            />
            5 Stars
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="rating"
              value="4"
              onChange={handleRatingChange}
              className="mr-2"
            />
            4 Stars
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="rating"
              value="3"
              onChange={handleRatingChange}
              className="mr-2"
            />
            3 Stars
          </label>
        </div>
      </div>

      <button
        onClick={handleSearchFilter}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default SearchFilter;
