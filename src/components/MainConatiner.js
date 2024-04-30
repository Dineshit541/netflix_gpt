import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainConatiner = () => {
  const movies=useSelector((store) =>store.movies?.nowPlayingMovies);
  if(movies === null) return;

  const mainMovies=movies[Math.floor(Math.random() * movies.length)];

  const {original_title,overview ,id}=mainMovies;

  return (
    <div className=" pt-[30%]  md:pt-0">
        <VideoTitle  title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
};

export default MainConatiner;
