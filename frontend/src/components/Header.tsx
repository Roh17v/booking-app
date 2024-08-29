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
  const calendarRef = useRef<HTMLDivElement>(null);
  const calendardivRef = useRef<HTMLDivElement>(null);
  const toggleCalendar = () => setOpenDate((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendardivRef.current &&
        !calendardivRef.current.contains(event.target as Node) &&
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
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
          <div className="flex gap-2 items-center p-4 m-1 flex-1 rounded-md bg-white mr-0">
            <FontAwesomeIcon icon={faPerson} className="cursor-pointer" />
            <span className="cursor-pointer text-base">
              2 adults 0 children 1 room
            </span>
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
