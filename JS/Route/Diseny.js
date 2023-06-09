import { API_Key, API_URL, IMAGE_BASE_URL } from "../Modules/APIVar.js";
import { getMain } from "../Modules/MainMovie.js";
import { movieSwiper } from "../Modules/MovieSwiper.js";
import { modal, movieDetail } from "../Modules/Modal.js";
const movies = [];
const KRmovies = [];
const actionMovie = [];
const comedyMovie = [];
const horrorMovie = [];
const crimeMovie = [];
const fantasyMovie = [];
const animationMovie = [];
let index = Math.floor(Math.random() * 20);
const getMovies = async () => {
  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => movies.push(movie));
  getMain(movies[index].id, movies[index].title, movies[index].overview);
  console.log(movies);
  const swiper_wrapper = document.querySelector(".movie_swiper_wrapper");
  movieSwiper(swiper_wrapper, movies);
  modal();
};

const getKRmovies = async () => {
  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_origin_country=KR&with_original_language=ko&with_watch_providers=337&language=ko-KR`
  );
  const json = await api.json();
  json.results.map((movie) => KRmovies.push(movie));
  console.log(KRmovies);
  const swiper_wrapper = document.querySelector(".KRmovie_swiper_wrapper");
  movieSwiper(swiper_wrapper, KRmovies);
  modal();
};
const action = async () => {
  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR&with_genres=28`
  );
  const json = await api.json();
  json.results.map((movie) => actionMovie.push(movie));
  const swiper_wrapper = document.querySelector(".action_swiper_wrapper");
  movieSwiper(swiper_wrapper, actionMovie);
  modal();
};

const comedy = async () => {
  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR&with_genres=35`
  );
  const json = await api.json();
  json.results.map((movie) => comedyMovie.push(movie));
  const swiper_wrapper = document.querySelector(".comedy_swiper_wrapper");
  movieSwiper(swiper_wrapper, comedyMovie);
  modal();
};

const horror = async () => {
  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR&with_genres=27`
  );
  const json = await api.json();
  json.results.map((movie) => horrorMovie.push(movie));
  const swiper_wrapper = document.querySelector(".horror_swiper_wrapper");
  movieSwiper(swiper_wrapper, horrorMovie);
  modal();
};

const crime = async () => {
  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR&with_genres=80`
  );
  const json = await api.json();
  json.results.map((movie) => crimeMovie.push(movie));
  const swiper_wrapper = document.querySelector(".crime_swiper_wrapper");
  movieSwiper(swiper_wrapper, crimeMovie);
  modal();
};

const fantasy = async () => {
  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR&with_genres=14`
  );
  const json = await api.json();
  json.results.map((movie) => fantasyMovie.push(movie));
  const swiper_wrapper = document.querySelector(".fantasy_swiper_wrapper");
  movieSwiper(swiper_wrapper, fantasyMovie);
  modal();
};

const animation = async () => {
  const api = await fetch(
    `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR&with_genres=16`
  );
  const json = await api.json();
  json.results.map((movie) => animationMovie.push(movie));
  const swiper_wrapper = document.querySelector(".animation_swiper_wrapper");
  movieSwiper(swiper_wrapper, animationMovie);
  modal();
};

getMovies();
getKRmovies();
action();
comedy();
horror();
crime();
fantasy();
animation();
getMain();
