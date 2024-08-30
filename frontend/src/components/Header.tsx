import {
  faBed,
  faCab,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDays, format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const [openPeople, setOpenPeople] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [state, setState] = useState<Range[]>([
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

  const handleOptions = (
    name: "adult" | "children" | "room",
    operation: string
  ) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const calendarRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const calendardivRef = useRef<HTMLDivElement>(null);
  const toggleCalendar = () => setOpenDate((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (optionsRef.current &&
          !optionsRef.current.contains(event.target as Node)) ||
        (calendardivRef.current &&
          !calendardivRef.current.contains(event.target as Node) &&
          calendarRef.current &&
          !calendarRef.current.contains(event.target as Node))
      ) {
        setOpenPeople(false);
        setOpenDate(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex justify-center text-white bg-primary-blue relative">
      <div className="max-w-[1024px] w-full mt-[20px] mb-[100px]">
        <div className="flex gap-8">
          <div
            className={`flex gap-2 items-center ${
              isActive ? "border-white border p-2 rounded-[20px]" : ""
            }`}
          >
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCar} />
            <span>Car</span>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCab} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="mt-10 text-5xl font-bold">Find your next stay</h1>
        <p className="text-2xl mt-2">
          Search deals on hotels, homes, and much more...
        </p>
        <div className="bg-primary-yellow flex text-slate-600 text-md absolute w-full max-w-[1024px] transform translate-y-1/2 rounded-md text-lg bottom-0">
          <div className="flex gap-2 items-center p-3 bg-white m-1 flex-1 rounded-md mr-0">
            <FontAwesomeIcon icon={faBed} className="cursor-pointer" />
            <input
              type="text"
              className="bg-white outline-none w-full h-full text-base"
              placeholder="Where are you going?"
            />
          </div>
          <div
            className="flex gap-2 items-center p-4 bg-white m-1 flex-1 rounded-md mr-0 relative"
            ref={calendardivRef}
          >
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="cursor-pointer"
              onClick={toggleCalendar}
            />
            <span className="cursor-pointer text-base" onClick={toggleCalendar}>
              {`${format(
                state[0].startDate ?? new Date(),
                "dd/MM/yyyy"
              )} — ${format(state[0].endDate ?? new Date(), "dd/MM/yyyy")}`}
            </span>
            {openDate && (
              <div ref={calendarRef}>
                <DateRange
                  className="absolute top-16 left-0 bg-gray-100"
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                />
              </div>
            )}
          </div>
          <div
            className="flex gap-2 items-center p-4 m-1 flex-1 rounded-md bg-white mr-0 relative"
            onClick={() => setOpenPeople((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faPerson} className="cursor-pointer" />
            <span className="cursor-pointer text-base">
              {`${options.adult} adults • ${options.children} children • ${options.room} room`}
            </span>
            {openPeople && (
              <div
                className="absolute top-16 bg-gray-200 px-4 py-2 rounded-md space-y-4"
                onClick={(event) => event.stopPropagation()}
                ref={optionsRef}
              >
                <div className="flex justify-between gap-8 items-center">
                  <span>Adults</span>
                  <div className="flex gap-4 items-center">
                    <button
                      onClick={() => handleOptions("adult", "i")}
                      className="font-bold text-primary-blue text-xl border border-gray-500 py-1 px-2 rounded"
                    >
                      +
                    </button>
                    <span>{options.adult}</span>
                    <button
                      disabled={options.adult <= 1}
                      onClick={() => handleOptions("adult", "d")}
                      className="font-bold text-primary-blue text-xl border border-gray-500 py-1 px-2 rounded disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="flex justify-between gap-8 items-center">
                  <span>Children</span>
                  <div className="flex gap-4 items-center">
                    <button
                      onClick={() => handleOptions("children", "i")}
                      className="font-bold text-primary-blue text-xl border border-gray-500 py-1 px-2 rounded"
                    >
                      +
                    </button>
                    <span>{options.children}</span>
                    <button
                      disabled={options.children <= 0}
                      onClick={() => handleOptions("children", "d")}
                      className="font-bold text-primary-blue text-xl border border-gray-500 py-1 px-2 rounded disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="flex justify-between gap-8 items-center">
                  <span>Rooms</span>
                  <div className="flex gap-4 items-center">
                    <button
                      onClick={() => handleOptions("room", "i")}
                      className="font-bold text-primary-blue text-xl border border-gray-500 py-1 px-2 rounded"
                    >
                      +
                    </button>
                    <span>{options.room}</span>
                    <button
                      disabled={options.room <= 1}
                      onClick={() => handleOptions("room", "d")}
                      className="font-bold text-primary-blue text-xl border border-gray-500 py-1 px-2 rounded disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="bg-primary-blue text-white px-4 m-1 rounded-md text-xl">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;