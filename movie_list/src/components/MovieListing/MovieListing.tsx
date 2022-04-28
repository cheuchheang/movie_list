import React, { useEffect } from "react";
import MovieApi from "common/api/MovieApi";
import { APIKey } from "common/api/MovieApiKey";

const MovieListing = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err)=>{
        console.log("Err:",err);
        
      })
      console.log("Respone:",response); 
    };
    fetchMovies()
  },[]);
  return <div className="banner-img"></div>;
};

export default MovieListing;
