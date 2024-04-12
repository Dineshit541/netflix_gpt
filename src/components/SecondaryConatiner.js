import MovieList from "./MovieList";
import {useSelector} from "react-redux";

const SecondaryConatiner = () => {

  const movies= useSelector(store =>store?.movies)

   return ( 
    movies &&
    <div className=" bg-black">
   <div className=" -mt-52 pl-12 relative z-20">
   <MovieList  title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
   <MovieList  title={"Popular"} movies={movies?.popularMovies}/>
   <MovieList  title={"Top Rated"} movies={movies?.topRatedMovies}/>
   <MovieList  title={"Upcoming"} movies={movies?.upcomingMovies}/>
   <MovieList  title={"Popular Series"} movies={movies?.popularSeries}/>
   <MovieList  title={"Top Rated Series"} movies={movies?.topRatedSeries}/>
   <MovieList  title={"Arrival Today TV Series"} movies={movies?.arrivalTodayMovies}/>
   
   </div>
   </div>
  )
}

export default SecondaryConatiner;