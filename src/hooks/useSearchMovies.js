import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies, addPopularSeries, addTopRatedMovies } from "../utils/moviesSlice";
import { addSearchMovies } from "../utils/searchSlice";

const useSearchMovies= ()=>{
    //Fetch API from TMDB and update the store
    const dispatch=useDispatch();

  const getSearchMovies= () => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=funnymovies&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addSearchMovies(response.results)))
      .catch((err) => console.error(err));
    
     
  };
  useEffect(() => {
    getSearchMovies();
  }, []);
};

export default useSearchMovies;