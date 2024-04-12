import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addArrivalTodayMovies, addNowPlayingMovies } from "../utils/moviesSlice";

const useArrivalTodayTvList = ()=>{
    //Fetch API from TMDB and update the store
    const dispatch=useDispatch();

  const getarrivalTodayMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) =>  dispatch(addArrivalTodayMovies(response.results)))
      .catch((err) => console.error(err));
     
  };
  useEffect(() => {
    getarrivalTodayMovies();
  }, []);
};

export default useArrivalTodayTvList;