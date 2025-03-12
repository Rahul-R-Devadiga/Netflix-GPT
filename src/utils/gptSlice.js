import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    MovieErrorMessage: null,
    isBlocked: false,
  },
  reducers: {
    toogleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieResult: (state, actions) => {
      const { movieNames, movieResults } = actions.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    toogleIsBlocked: (state, actions) => {
      state.isBlocked = actions.payload;
    },
    addMovieErrorMessage: (state, actions) => {
      state.MovieErrorMessage = actions.payload;
    },
  },
});

export const {
  toogleGptSearchView,
  addMovieResult,
  toogleIsBlocked,
  addMovieErrorMessage,
} = gptSlice.actions;
export default gptSlice.reducer;
