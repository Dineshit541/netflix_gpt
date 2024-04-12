import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies, addPopularSeries, addTopRatedMovies } from "../utils/moviesSlice";

const usePopularSeries= ()=>{
    //Fetch API from TMDB and update the store
    const dispatch=useDispatch();

  const getPouplarSeries= () => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) =>  dispatch(addPopularSeries(response.results)))
      .catch((err) => console.error(err));
     
  };
  useEffect(() => {
    getPouplarSeries();
  }, []);
};

export default usePopularSeries;