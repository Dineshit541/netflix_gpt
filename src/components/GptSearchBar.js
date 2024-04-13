import { useSelector } from "react-redux";
import langu from "../utils/languageConstant";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addSearchMovies } from "../utils/searchSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config?.lang);
  const searchtext = useRef();

  const dispatch = useDispatch();

  const handleGptSearch = () => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query="+searchtext?.current?.value+"&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) =>
        dispatch(
          addSearchMovies(response.results.slice(0,5))
        )
      )
      .catch((err) => console.error(err));
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={langu[langkey].gptSearchPlaceholder}
        />
        <button
          className=" m-3 col-span-3 md:m-4 md:py-2 md:px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {langu[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
