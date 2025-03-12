import { useEffect, useRef } from "react";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieErrorMessage,
  addMovieResult,
  toogleGptSearchView,
  toogleIsBlocked,
} from "../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";

const useGPTSearchMovies = () => {
  const dispatch = useDispatch();
  const isBlocked = useSelector((store) => store.gpt.isBlocked);
  const requestTimestamps = useRef([]); // Track user's rapid requests

  //Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  useEffect(() => {
    if (isBlocked) {
      const timer = setTimeout(
        () => dispatch(toogleGptSearchView(false)),
        600000
      ); // 10 minutes block
      return () => clearTimeout(timer);
    }
  }, [isBlocked]);

  const handleGptSearchClick = async (movieToSearch) => {
    // searchText.current.value
    if (isBlocked) {
      dispatch(
        addMovieErrorMessage(
          "You've been blocked for 10 minutes due to excessive requests."
        )
      );
      return;
    }
    // Prevent rapid requests - Allow only 3 requests per minute
    const now = Date.now();
    requestTimestamps.current = requestTimestamps.current.filter(
      (timestamp) => now - timestamp < 60000
    );

    if (requestTimestamps.current.length >= 3) {
      dispatch(toogleIsBlocked(true));
      dispatch(
        addMovieErrorMessage(
          "Too many requests. You've been blocked for 10 minutes."
        )
      );
      return;
    }

    // Add current request timestamp
    requestTimestamps.current.push(now);

    const prompt = `
      Act as a professional movie recommendation system.
      Based on the following query, suggest exactly 5 movie names (no more, no less).
  
      Query: ${movieToSearch}
  
      Only provide movie names separated by commas (NO jokes, NO extra text).
      Example Result: Golmaal, Koi Mil Gaya, Kal Ho Na Ho, Sholay, Andaaz Apna Apna
  
      Important: 
      - DO NOT include jokes, irrelevant content, or random text.
      - Only respond with the movie names, separated by commas.
    `;
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const result = await model.generateContent(prompt);
      // console.log(result.response.text());
      // console.log(result.response.text().split(","));
      const getMovies = result.response.text().trim().split(",");
      console.log(getMovies);
      const promiseArray = getMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addMovieResult({ movieNames: getMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 429:
            dispatch(
              addMovieErrorMessage(
                "Yor're Searching too fast! Please wait a minute."
              )
            );
            break;
          case 403:
            dispatch(
              addMovieErrorMessage(
                "Your API key has insufficient quota. Please contact developer."
              )
            );
            break;
          case 500:
            dispatch(
              addMovieErrorMessage("Server error! Please try again later.")
            );
            break;
          default:
            dispatch(
              addMovieErrorMessage(
                "Something went wrong! Please refine your search."
              )
            );
        }
      } else if (error.request) {
        dispatch(
          addMovieErrorMessage(
            "No response from server. Check your internet connection."
          )
        );
      } else {
        dispatch(
          addMovieErrorMessage(
            "Unexpected error occurred. Please try again later."
          )
        );
      }
    }
  };
  return { handleGptSearchClick };
};

export default useGPTSearchMovies;
  