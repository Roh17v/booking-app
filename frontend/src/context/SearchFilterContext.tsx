import { addDays } from "date-fns";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Range } from "react-date-range";

interface DateRange {
startDate: Date;
endDate: Date;
key: string;
autoFocus: boolean;
showDateDisplay: boolean;
}

interface SearchContextProps {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  propertyType: string[];
  setPropertyType: React.Dispatch<React.SetStateAction<string[]>>;
  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  resetFilters: () => void;
  date: DateRange[];
  setDate: (date: DateRange[]) => void;
  options: { adult: number; children: number; room: number };
  setOptions: Dispatch<
    SetStateAction<{ adult: number; children: number; room: number }>
  >;
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
  const [date, setDate] = useState<DateRange[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
      autoFocus: true,
      showDateDisplay: true,
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const resetFilters = () => {
    setPriceRange([0, 10000]);
    setPropertyType(defaultFilters.propertyType);
    setRating(defaultFilters.rating);
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
        date,
        setDate,
        options,
        setOptions,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
