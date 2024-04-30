import MovieCard from "./MovieCard";
import { addVideoId, openDetail } from "../utils/selectedMovieSlice";
import { useDispatch } from "react-redux";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  return (
    <div className="px-6 ">
      <h1 className=" text-3xl py-4 text-white">{title}</h1>
      <div className=" flex overflow-x-scroll scrollbar-thin scrollbar-track-transparent pb-2">
        <div className=" flex"> 
        
          {movies?.map((movie) => (
              <div
              className="cursor-pointer"
              onClick={() => {
                dispatch(addVideoId(movie.id));
                dispatch(openDetail());
              }}
              key={movie.id}
            >
            <MovieCard   posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
