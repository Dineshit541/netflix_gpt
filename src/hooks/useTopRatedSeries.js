import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedSeries } from "../utils/moviesSlice";

const useTopRatedSeries = ()=>{
    //Fetch API from TMDB and update the store
    const dispatch=useDispatch();

  const getTopRatedSeries= () => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) =>  dispatch(addTopRatedSeries(response.results)))
      .catch((err) => console.error(err));
     
  };
  useEffect(() => {
    getTopRatedSeries();
  }, []);
};

export default useTopRatedSeries;