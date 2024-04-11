import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideo = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        const filtereddata = response.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filtereddata.length
          ? filtereddata[0]
          : response.results[0];
        dispatch(addTrailerVideo(trailer));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMoviesVideo();
  }, []);
};

export default useTrailerVideo;
