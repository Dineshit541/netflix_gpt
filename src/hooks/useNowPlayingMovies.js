import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = ()=>{
    //Fetch API from TMDB and update the store
    const dispatch=useDispatch();

  const getNowPlayingMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) =>  dispatch(addNowPlayingMovies(response.results)))
      .catch((err) => console.error(err));
     
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;