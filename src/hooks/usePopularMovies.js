import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies, addTopRatedMovies } from "../utils/moviesSlice";

const usePopularMovies = ()=>{
    //Fetch API from TMDB and update the store
    const dispatch=useDispatch();

  const getPouplarMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) =>  dispatch(addPopularMovies(response.results)))
      .catch((err) => console.error(err));
     
  };
  useEffect(() => {
    getPouplarMovies();
  }, []);
};

export default usePopularMovies;