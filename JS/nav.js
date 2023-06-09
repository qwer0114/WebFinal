import { genreMovies } from "./Modules/GenreMovie.js";
const nav = document.querySelector(".nav");
const genres = document.querySelector(".genres");
const total = document.querySelector("#total");
const action = document.querySelector("#action");
const comedy = document.querySelector("#comedy");
const horror = document.querySelector("#horror");
const crime = document.querySelector("#crime");
const fantasy = document.querySelector("#fantasy");
const animation = document.querySelector("#animation");

const handleMoseover = () => {
    genres.style.display = "block";
}

const handleMouseleave = () => {
    genres.style.display = "none";
}
nav.addEventListener("mouseover", handleMoseover);
genres.addEventListener("mouseover", handleMoseover);
nav.addEventListener("mouseleave", handleMouseleave);
genres.addEventListener("mouseleave", handleMouseleave);

action.addEventListener("click", () => {
    genreMovies(28);
})

comedy.addEventListener("click", () => {
    genreMovies(35);
})

horror.addEventListener("click", () => {
    genreMovies(27);
})

crime.addEventListener("click", () => {
    genreMovies(80);
})

fantasy.addEventListener("click", () => {
    genreMovies(14);
})

animation.addEventListener("click", () => {
    genreMovies(16);
})
