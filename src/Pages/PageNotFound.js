import { Link } from "react-router-dom";
import pagenotfound from "../assets/images/1-10.png";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page not found/cinematic`;
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4 ">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, oops!!!
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={pagenotfound} alt="page not found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Back To Cinematic
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
