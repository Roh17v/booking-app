const ThreeDotsLoader = () => {
  return (
    <div className="flex justify-center items-center space-x-2 h-screen">
      <div className="dot bg-blue-500 w-3 h-3 rounded-full animate-bounce"></div>
      <div className="dot bg-blue-500 w-3 h-3 rounded-full animate-bounce delay-200"></div>
      <div className="dot bg-blue-500 w-3 h-3 rounded-full animate-bounce delay-400"></div>
    </div>
  );
};

export default ThreeDotsLoader;
