const Featured = () => {
  return (
    <div className="w-full max-w-[1024px] flex gap-4">
      <div className="relative">
        <img
          loading="lazy"
          src="https://cf.bstatic.com/xdata/images/city/max250/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="w-full object-cover overflow-hidden rounded-md"
        />
        <div className="absolute left-4 bottom-6">
          <h1 className="text-xl font-bold text-white">Dublin</h1>
          <h2 className="text-lg font-semibold text-white">123 properties</h2>
        </div>
      </div>
      <div className="relative">
        <img
          loading="lazy"
          src="https://cf.bstatic.com/xdata/images/city/max250/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="w-full object-cover overflow-hidden rounded-md"
        />
        <div className="absolute left-4 bottom-6">
          <h1 className="text-xl font-bold text-white">Reno</h1>
          <h2 className="text-lg font-semibold text-white">533 properties</h2>
        </div>
      </div>{" "}
      <div className="relative">
        <img
          loading="lazy"
          src="https://cf.bstatic.com/xdata/images/city/max250/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="w-full object-cover overflow-hidden rounded-md "
        />
        <div className="absolute left-4 bottom-6">
          <h1 className="text-xl font-bold text-white">Austin</h1>
          <h2 className="text-lg font-semibold text-white">532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
