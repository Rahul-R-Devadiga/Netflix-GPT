import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import useGPTSearchMovies from "../hooks/useGPTSearchMovies";

const GptSearchBar = () => {
  const isBlocked = useSelector((store) => store.gpt.isBlocked);
  const errorMessage = useSelector((store) => store.gpt.MovieErrorMessage);
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const { handleGptSearchClick } = useGPTSearchMovies();

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        action=""
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 bg-gray-600 text-white"
        />
        <button
          className="col-span-3 m-4 py-2 bg-red-700 text-white rounded-lg"
          onClick={() => handleGptSearchClick(searchText.current?.value)}
          disabled={isBlocked}
        >
          {lang[langKey].search}
        </button>
        {errorMessage && (
          <h1 className="text-red-600 col-span-12 m-2 py-2">{errorMessage}</h1>
        )}
      </form>
    </div>
  );
};

export default GptSearchBar;
