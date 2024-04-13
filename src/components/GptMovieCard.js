import { IMG_CDN_URL } from "../utils/constant"


const GptMovieCard = ({posterPath,title}) => {

  return (
    <div className=" md:py-12 md:px-12 px-5 py-8">
     <div className=" md:text-lg text-md">{title}</div>
    <img 
    alt="Poster"
    src={IMG_CDN_URL + posterPath}/>
  </div>
    
  )
}

export default GptMovieCard