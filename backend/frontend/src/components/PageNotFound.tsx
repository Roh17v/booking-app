import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 Not Found"
        className="w-64 md:w-96 mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 text-center mb-8">
        We can't seem to find the page you're looking for.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
