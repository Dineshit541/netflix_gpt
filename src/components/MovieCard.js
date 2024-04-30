import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className=" w-48 pr-6 cursor-pointer">
      <img alt="Poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
