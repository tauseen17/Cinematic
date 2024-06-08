import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../Pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path=""
          element={<MovieList apiPath="movie/now_playing" title="home" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movie/popular"
          element={<MovieList apiPath="movie/popular" title="popular" />}
        />
        <Route
          path="movie/top"
          element={<MovieList apiPath="movie/top_rated" title="top rated" />}
        />
        <Route
          path="movie/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
