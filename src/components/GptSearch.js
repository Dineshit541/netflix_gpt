import { BG_URL } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className=" absolute -z-10 md:h-dvh ">
        <img className="h-screen object-cover md:w-screen"
        src={BG_URL} alt="logo" />
      </div> 
      <div >
      <GptSearchBar />
      <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
