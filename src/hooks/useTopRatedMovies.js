import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = ()=>{
    //Fetch API from TMDB and update the store
    const dispatch=useDispatch();

  const getTopRatedMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) =>  dispatch(addTopRatedMovies(response.results)))
      .catch((err) => console.error(err));
     
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;