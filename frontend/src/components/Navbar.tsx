import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <nav className="flex w-full justify-center bg-primary-blue h-[50px] py-8 px-4">
      <div className="max-w-[1024px] flex justify-between items-center w-full">
        <div>
          <Link to={"/"} className="text-2xl text-white font-medium">
            Booking.com
          </Link>
        </div>
        <div className="flex items-center">
          {user ? (
            <div
              className="relative flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Circle with first letter of username */}
              <div className="text-sm font-medium p-2 bg-white border-none text-primary-blue rounded-full ml-[20px] cursor-pointer flex items-center justify-center w-[40px] h-[40px]">
                {user.username[0].toUpperCase()}
              </div>

              {/* Tooltip with username and email */}
              {isTooltipVisible && (
                <div className="z-50 absolute top-12 left-0 bg-white shadow-md p-3 rounded-md text-sm text-gray-800">
                  <p>
                    <strong>Username:</strong> {user.username}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                </div>
              )}

              {/* Log Out button */}
              <button
                onClick={logout}
                className="text-sm font-medium p-2 bg-white border-none text-primary-blue rounded-sm ml-[20px] cursor-pointer"
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <Link to={"/signin"}>
                <button className="text-sm font-medium p-2 bg-white border-none text-primary-blue rounded-sm ml-[20px] cursor-pointer">
                  Sign In
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="text-sm font-medium p-2 bg-white border-none text-primary-blue rounded-sm ml-[20px] cursor-pointer">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
