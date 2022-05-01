import React, { useEffect } from "react";
import MovieApi from "common/api/MovieApi";
import { APIKey } from "common/api/MovieApiKey";
import { useAppDispatch } from "features/hooks";
import { addMovies } from "features/movies/movieSlice";

const MovieListing = () => {
  const movieText = "Harry";
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response: any = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("Err:", err);
      });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return <div className="banner-img"></div>;
};

export default MovieListing;
