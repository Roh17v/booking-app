import {
  faBed,
  faCab,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(true);
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
        <div className="border-[3px] border-primary-yellow flex justify-between text-slate-600 bg-white text-md absolute w-full max-w-[1024px] transform translate-y-1/2 rounded-md text-lg bottom-0">
          <div className="flex gap-2 items-center p-4">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="text"
              className="bg-white outline-none w-full h-full"
              placeholder="Where are you going?"
            />
          </div>
          <div className="flex gap-2 items-center p-4">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>Check-in Date — Check-out Date</span>
          </div>
          <div className="flex gap-2 items-center p-4">
            <FontAwesomeIcon icon={faPerson} />
            <span>2 adults 0 children 1 room</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
