const Navbar = () => {
  return (
    <nav className="flex w-full justify-center bg-primary-blue h-[50px] py-8">
      <div className="max-w-[1024px] flex justify-between items-center w-full">
        <div>
          <span className="text-2xl text-white font-medium">Booking.com</span>
        </div>
        <div>
          <button className="text-sm font-medium p-2 bg-white border-none text-primary-blue rounded-sm ml-[20px] cursor-pointer">
            Sign In
          </button>
          <button className="text-sm font-medium p-2 bg-white border-none text-primary-blue rounded-sm ml-[20px] cursor-pointer">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
