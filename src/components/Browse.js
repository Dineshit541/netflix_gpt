import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainConatiner from "./MainConatiner";
import SecondaryConatiner from "./SecondaryConatiner";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainConatiner />
      <SecondaryConatiner />
    </div>
  );
};

export default Browse;
