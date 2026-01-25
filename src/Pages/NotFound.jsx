import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="py-10 font-serif bg-white">
      <div className="max-w-5xl px-4 mx-auto">
        <div className="text-center">
          {/* Background GIF area */}
          <div
            className="flex items-center justify-center bg-center bg-no-repeat h-100"
            style={{
              backgroundImage:
                "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
            }}
          >
            <h1 className="text-[80px] text-white text-shadow-[0px_0px_2px_#000000] font-bold">404</h1>
          </div>

          {/* Content box */}
          <div className="-mt-12.5">
            <h3 className="text-2xl font-semibold">Look like you're lost</h3>
            <p className="mt-2 text-gray-600">
              the page you are looking for not avaible!
            </p>

            <Link
              to="/"
              className="inline-block mt-5 bg-[#39ac31] text-white px-5 py-2 rounded"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
