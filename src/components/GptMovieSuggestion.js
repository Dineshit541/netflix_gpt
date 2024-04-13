
import { useSelector } from "react-redux"
import GptMovieCard from "./GptMovieCard";


const GptMovieSuggestion = () => {

  const result=useSelector(store => store.search?.searchmovies)
 
  return (
    <div className="  flex bg-black text-white bg-opacity-70">
     {result && result?.map((res) => (
            <GptMovieCard posterPath={res.poster_path} title={res.title} key={res.id} />
          ))}
    </div>
  )
}

export default GptMovieSuggestion