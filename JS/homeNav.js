import { genreMovies } from "./Modules/GenreMovie.js";

const total = document.querySelector("#total");
const action = document.querySelector("#action");
const comedy = document.querySelector("#comedy");
const horror = document.querySelector("#horror");
const crime = document.querySelector("#crime");
const fantasy = document.querySelector("#fantasy");
const animation = document.querySelector("#animation");

total.addEventListener("click", () => {
  const genre_movies = document.querySelector(".genre_movies");
  const movies = document.querySelector(".movies");
  genre_movies.style.display = "none";
  movies.style.display = "block";
});

action.addEventListener("click", () => {
  genreMovies(28);
});

comedy.addEventListener("click", () => {
  genreMovies(35);
});

horror.addEventListener("click", () => {
  genreMovies(27);
});

crime.addEventListener("click", () => {
  genreMovies(80);
});

fantasy.addEventListener("click", () => {
  genreMovies(14);
});

animation.addEventListener("click", () => {
  genreMovies(16);
});
