import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import MoviePopup from "./MoviePopup";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    movies && (
      <div className=" bg-black">
        <div className=" mt-0 md:-mt-52  pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
          <MovieList title={"Popular Series"} movies={movies?.popularSeries} />
          <MovieList
            title={"Top Rated Series"}
            movies={movies?.topRatedSeries}
          />
          <MovieList
            title={"Arrival Today TV Series"}
            movies={movies?.arrivalTodayMovies}
          />
          <MoviePopup />
        </div>
      </div>
    )
  );
};

export default SecondaryConatiner;
