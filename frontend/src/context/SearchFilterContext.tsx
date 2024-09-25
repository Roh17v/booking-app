import { createContext, ReactNode, useContext, useState } from "react";

interface SearchContextProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  propertyType: string[];
  setPropertyType: React.Dispatch<React.SetStateAction<string[]>>;
  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  resetFilters: () => void;
}

interface SearchContextProviderProps {
  children: ReactNode;
}

const defaultFilters = {
  priceRange: [0, 10000],
  propertyType: [],
  rating: null,
};

const SearchContext = createContext({} as SearchContextProps);

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [propertyType, setPropertyType] = useState<string[]>([]);
  const [rating, setRating] = useState<number | null>(null);

  const resetFilters = () => {
    setPriceRange([0, 10000]);
    setPropertyType([]);
    setRating(null);
  };

  return (
    <SearchContext.Provider
      value={{
        priceRange,
        setPriceRange,
        propertyType,
        setPropertyType,
        rating,
        setRating,
        resetFilters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
