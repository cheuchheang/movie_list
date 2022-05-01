import MovieCard from "components/MovieCard/MovieCard";
import { useAppSelector } from "features/hooks";
import { getAllMovies } from "features/movies/movieSlice";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useAppSelector(getAllMovies);
  console.log(movies.Search);

  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map(({movie,index}:any) => (
        <MovieCard key={index}   />
   
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
