import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = ()=>{
    //Fetch API from TMDB and update the store
    const dispatch=useDispatch();

  const getUpcomingMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) =>  dispatch(addUpcomingMovies(response.results)))
      .catch((err) => console.error(err));
     
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;