import useArrivalTodayTvList from "../hooks/useArrivalTodayTvList";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularSeries from "../hooks/usePopularSeries";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import Header from "./Header";
import MainConatiner from "./MainConatiner";
import SecondaryConatiner from "./SecondaryConatiner";
import GptSearch from "./GptSearch";

const Browse = () => {
  const gpttoogle = useSelector((store) => store.gpt?.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useArrivalTodayTvList();
  usePopularSeries();
  useTopRatedSeries();

  return (
    <div>
      <Header />
      {gpttoogle ? (
        <GptSearch />
      ) : (
        <>
          <MainConatiner />
          <SecondaryConatiner />
        </>
      )}
    </div>
  );
};

export default Browse;
