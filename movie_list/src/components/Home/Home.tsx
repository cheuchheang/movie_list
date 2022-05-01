import React,{ useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "common/api/MovieApi";
import { APIKey } from "common/api/MovieApiKey";
import { useAppDispatch } from "features/hooks";
import { addMovies } from "features/movies/movieSlice";

const Home = () => {
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
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
