import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        Welcome to <span className="text-red-600">AlmaBetter</span> <br />{" "}
        Youtube Subscriber API{" "}
      </div>

      {/* Link to GET /subscriber */}
      <div className="mt-4">
        <Link
          to={"/subscribers"}
          className="text-sm bg-red-700 hover:bg-red-800 duration-300 px-4 py-2 rounded-md">
          GET /subscriber
        </Link>
        <p className="text-[0.5rem] opacity-50 mt-1 text-blue-500">
          fetches the details of all subscribers
        </p>
      </div>

      {/* Link to GET /subscriber/names */}
      <div className="mt-4">
        <Link
          to={"/subscribers/names"}
          className="block text-sm bg-red-700 hover:bg-red-800 duration-300 px-4 py-2 rounded-md">
          GET /subscriber/names
        </Link>
        <p className="text-[0.5rem] opacity-50 mt-1 text-blue-500">
          fetches just the name and subscribed channels
        </p>
      </div>

      {/* Link to GET /subscriber/:id */}
      <div className="mt-4">
        <Link
          to={"/subscribers/6566f5cfd7b0f42ce80bf072"}
          className="block text-sm bg-red-700 hover:bg-red-800 duration-300 px-4 py-2 rounded-md">
          GET /subscriber/:id
        </Link>
        <p className="text-[0.5rem] opacity-50 mt-1 text-blue-500">
          fetches the details based on ID
        </p>
      </div>
    </div>
  );
};

export default HomePage;
